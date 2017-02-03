import Component from '../component';
import {GRID_NAME} from 'src/definition';
import {generate} from 'core/column-list/generate';
import AppError from 'core/infrastructure/error';
import {isUndefined} from 'core/services/utility';

class ColumnList extends Component {
	constructor() {
		super();
	}

	onInit() {
		const model = this.root.model;
		const data = model.data;
		const state = data();
		
		if (state.columns.length === 0 && !isUndefined(this.generation)) {
			model.dataChanged.on(e => {
				if (e.changes.hasOwnProperty('rows')) {
					const deep = this.generation || 'deep';
					let columns;
					switch (deep) {
						case 'deep':
							columns = generate(e.changes.rows.newValue, true);
							break;
						case 'shallow':
							columns = generate(e.changes.rows.newValue, false);
							break;
						default:
							throw new AppError(
								'column.list',
								`Invalid generation mode "${this.generation}"`
							);
					}
					data({columns: columns});
				}
			});
		}
	}
}

ColumnList.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ColumnList,
	bindings: {
		generation: '@'
	}
};