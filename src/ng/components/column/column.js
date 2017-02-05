import Component from '../component';
import {GRID_NAME, COLUMN_NAME, COLUMN_LIST_NAME} from 'src/definition';
import {clone, isUndefined} from 'core/services/utility';
import TextColumn from 'core/column/column.text';
import TemplatePath from 'core/template/template.path';
import * as ng from 'ng/services/ng';
import * as path from 'core/services/path'

TemplatePath
	.register(COLUMN_NAME, (template, column) => {
		return {
			model: template.for,
			resource: column.key
		};
	});

class Column extends Component {
	constructor($attrs) {
		super();

		this.$attrs = $attrs;
	}

	copy(source, target) {
		Object.keys(target)
			.filter(key => !ng.isSystem(key))
			.forEach(attr => {
				const accessor = path.compile(attr);
				accessor(source, target[attr]);
			});
	}

	onInit() {
		if (isUndefined(this.key)) {
			this.key = '$default';
		}

		const data = this.root.model.data;
		const state = data();
		const columns = clone(state.columns);
		const key = this.key;
		let column = columns.filter(c => c.key === key)[0];
		if (!column) {
			column = TextColumn.model();
			columns.push(column);
		}

		this.copy(column, this.$attrs);
		data({columns: columns});
	}
}

Column.$inject = ['$attrs'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		columns: `^^${COLUMN_LIST_NAME}`
	},
	controller: Column,
	bindings: {
		value: '&'
	}
};