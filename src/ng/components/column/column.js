import Component from '../component';
import {GRID_NAME, COLUMN_NAME, COLUMN_LIST_NAME} from 'src/definition';
import {clone, isUndefined} from 'core/services/utility';
import TemplatePath from 'core/template/template.path';
import * as ng from 'ng/services/ng';
import * as path from 'core/services/path'
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

	copy(source, target) {
		Object.keys(target)
			.filter(key => !ng.isSystem(key) && key != 'value')
			.forEach(attr => {
				const accessor = path.compile(attr);
				accessor(source, target[attr]);
			});

		if (target.hasOwnProperty('value')) {
			// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
			source.$value = isUndefined(this.value) ? null : this.value;
		}
	}

	onInit() {
		if(isUndefined(this.key)) {
			this.key = '$default';
		}

		const $attrs = this.$attrs;
		const data = this.root.model.data;
		const dataState = data();
		const columns = clone(dataState.columns);
		let column = columnService.find(columns, this.key);
		if (!column) {
			column = columnFactory($attrs.type || 'text').model;
			column.key = this.key;
			columns.source = 'template';
			columns.push(column);
		}

		this.copy(column, $attrs);
		this.columnList.add(column);
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