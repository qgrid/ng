import ModelComponent from '../model.component';
import AppError from 'core/infrastructure/error';
import merge from 'core/services/merge';
import columnFactory from 'core/column/column.factory';
import * as columnService from 'core/column/column.service'
import * as ng from 'ng/services/ng';
import * as path from 'core/services/path'
import {isUndefined, assignWith, noop, clone, isObject, identity} from 'core/services/utility';
import {parseFactory, getType} from 'core/services/convert';
import {generate} from 'core/column-list/column.list.generate';
import {GRID_NAME} from 'ng/definition';

class ColumnList extends ModelComponent {
	constructor($scope, $parse) {
		super('columnList');

		this.columns = [];
		this.$scope = $scope;
		this.$parse = $parse;
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

		const columns = [];
		const createColumn = columnFactory(model);
		const rows = data().rows;
		switch (generation) {
			case 'deep':
				columns.push(...generate(rows, createColumn, true));
				break;
			case 'shallow':
				columns.push(...generate(rows, createColumn, false));
				break;
			default:
				throw new AppError(
					'column.list',
					`Invalid generation mode "${generation}"`
				);
		}

		this.update(columns);
	}

	update(generatedColumns) {
		const model = this.root.model;
		const data = model.data;
		let columns = Array.from(data().columns);
		const tag = {
			source: 'column.list',
			behavior: 'core'
		};

		if (arguments.length) {
			const generatedColumnMap = columnService.map(generatedColumns);
			const templateColumnMap = columnService.map(this.columns);
			const dataColumns = columns.filter(c => !generatedColumnMap.hasOwnProperty(c.key) && !templateColumnMap.hasOwnProperty(c.key));
			columns = this.merge(generatedColumns, dataColumns);
		}

		columns = this.merge(columns, this.columns);
		if (columns.length) {
			data({columns: columns}, tag);
		}
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

	copy(target, source) {
		const $parse = this.$parse;
		const $scope = this.$scope;

		Object.keys(source)
			.filter(key => !ng.isSystem(key) && !isUndefined(source[key]) && key !== 'value')
			.forEach(key => {
				const value = source[key];
				const accessor = path.compile(key);
				const targetValue = accessor(target);
				const parse = parseFactory(getType(targetValue));
				const sourceValue =
					parse !== identity
						? parse(value)
						: isObject(targetValue)
							? $parse(value)($scope)
							: value;

				accessor(target, sourceValue);
			});
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

ColumnList.$inject = ['$scope', '$parse'];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ColumnList,
	bindings: {
		columnListGeneration: '@generation'
	}
};