import ModelComponent from '../model.component';
import AppError from 'core/infrastructure/error';
import merge from 'core/services/merge';
import * as columnService from 'core/column/column.service'
import {isUndefined, assignWith, noop, clone} from 'core/services/utility';
import {generate} from 'core/column-list/column.list.generate';
import {GRID_NAME} from 'ng/definition';

class ColumnList extends ModelComponent {
	constructor() {
		super('columnList');
		this.columns = [];
	}

	// Use onLink to wait while this.columns will be filled by column components
	onLink() {
		const generation = this.columnListGeneration;
		const model = this.root.model;
		model.dataChanged.watch(e => {
			if (e.tag.source === 'column.list') {
				return;
			}

			if (generation) {
				if (e.hasChanges('rows')) {
					this.updateOn(generation);
				}
			}
			else {
				if (e.hasChanges('columns')) {
					this.update();
				}
			}
		});

		if (!model.data().columns.length) {
			this.update();
		}
	}

	updateOn(generation) {
		const model = this.root.model;
		const data = model.data;

		const generatedColumns = [];
		const rows = data().rows;
		switch (generation) {
			case 'deep':
				generatedColumns.push(...generate(rows, true));
				break;
			case 'shallow':
				generatedColumns.push(...generate(rows, false));
				break;
			default:
				throw new AppError(
					'column.list',
					`Invalid generation mode "${generation}"`
				);
		}

		this.update(generatedColumns);
	}

	update(generatedColumns) {
		const data = this.root.model.data;
		let columns = Array.from(data().columns)
		const tag = {
			source: 'column.list'
		};

		if (arguments.length) {
			const generatedColumnMap = columnService.map(generatedColumns);
			const templateColumnMap = columnService.map(this.columns);
			const dataColumns = columns.filter(c => !generatedColumnMap.hasOwnProperty(c.key) && !templateColumnMap.hasOwnProperty(c.key));
			columns = this.merge(generatedColumns, dataColumns);
		}

		data({columns: this.merge(columns, this.columns)}, tag);
	}

	merge(left, right) {
		const doMerge = merge({
			equals: (l, r) => l.key === r.key,
			update: (l, r) => assignWith(l, r, (source, target) => !isUndefined(target) && target !== null ? target : source),
			insert: (r, left) => left.push(r),
			remove: noop
		});

		doMerge(left, right);
		return left;
	}

	add(column) {
		this.columns.push(column);
	}

	register(column) {
		const columnList = this.root.model.columnList;
		const columns = clone(columnList().columns);
		columns[column.type] = column;
		columnList({
			columns: columns
		});
	}
}

ColumnList.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ColumnList,
	bindings: {
		columnListGeneration: '@generation'
	}
};