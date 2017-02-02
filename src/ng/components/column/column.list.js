import Component from '../component';
import {GRID_NAME} from 'src/definition';
import {generate} from 'core/column-list/generate';
import {isUndefined} from 'core/services/utility';
import AppError from 'core/infrastructure/error';

class ColumnList extends Component {
	constructor() {
		super();
	}

	onInit() {
		const model = this.root.model;
		const data = model.data;
		const state = data();
		
		if (state.columns.length === 0 && this.generate) {
			model.dataChanged.on(e => {
				if (e.changes.hasOwnProperty('rows')) {
					const deep = this.generateMode === 'deep' || isUndefined(this.generateMode);
					if (!deep && this.generateMode !== 'flat') {
						throw new AppError(
							'template.core',
							`"${name}" is reserved, use another name`
						);
					}
					const columns = generate(e.changes.rows.newValue, deep);
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
		generate: '<',
		generateMode: '@'
	}
};