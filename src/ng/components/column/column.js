import Component from '../component';
import {GRID_NAME, COLUMN_NAME, COLUMN_LIST_NAME} from 'src/definition';
import {clone, isUndefined} from 'core/services/utility';
import TextColumn from 'core/column/column.text';
import TemplatePath from '../template/template.path';

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
// TODO: automate
		source.key = target.key;
		if (!isUndefined(target.title)) {
			source.title = target.title;
		}

		if (!isUndefined(target.isDefault)) {
			source.isDefault = target.isDefault;
		}

		if (!isUndefined(target.isVisible)) {
			source.isVisible = target.isVisible;
		}

		if (!isUndefined(target.aggregation)) {
			source.aggregation = target.aggregation;
		}

		if (this.$attrs.hasOwnProperty('value')) {
			// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
			source.$value = isUndefined(this.value) ? null : this.value;
		}
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

		this.copy(column, this);
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
		key: '@',
		title: '@',
		value: '&',
		isDefault: '@',
		isVisible: '@',
		aggregation: '@'
	}
};