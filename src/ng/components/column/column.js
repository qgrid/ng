import Component from '../component';
import {GRID_NAME, COLUMN_NAME, COLUMN_LIST_NAME} from 'ng/definition';
import {clone, isUndefined} from 'core/services/utility';
import TemplatePath from 'core/template/template.path';
import * as columnService from 'core/column/column.service';
import columnFactory from 'core/column/column.factory';

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

	onInit() {
		const $attrs = this.$attrs;
		const withKey = !isUndefined(this.key);
		if (!withKey) {
			if ($attrs.hasOwnProperty('type')) {
				this.key = `$default.${$attrs.type}`;
			}
			else {
				this.key = '$default';
			}
		}
		if ($attrs.hasOwnProperty('editorSubmitShortcut')) {
			this.editorSubmitShortcut = $attrs.editorSubmitShortcut;
		}

		const model = this.root.model;
		const createColumn = columnFactory(model);
		const data = model.data;
		const dataState = data();
		const columns = clone(dataState.columns);
		let column = columnService.find(columns, this.key);
		if (!column) {
			column = createColumn($attrs.type || 'text').model;
			column.key = this.key;
			columns.source = 'template';
			columns.push(column);
		}

		this.columnList.copy(column, $attrs);
		// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
		if ($attrs.hasOwnProperty('value')) {
			column.$value = isUndefined(this.value) ? null : this.value;
		}

		if (withKey) {
			this.columnList.add(column);
		}
		else {
			const settings = Object.keys($attrs)
				.filter(key => !isUndefined($attrs[key]) && column.hasOwnProperty(key))
				.reduce((memo, key) => {
					memo[key] = column[key];
					return memo;
				}, {});

			this.columnList.register(settings);
		}
	}
}

Column.$inject = ['$attrs'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		columnList: `^^${COLUMN_LIST_NAME}`
	},
	controller: Column,
	bindings: {
		value: '&',
		key: '@'
	}
};