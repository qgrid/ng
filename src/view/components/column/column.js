import Component from '../component';
import {GRID_NAME, COLUMN_NAME, COLUMN_LIST_NAME} from '@grid/view/definition';
import {isUndefined} from '@grid/core/utility';
import {TemplatePath} from '@grid/core/template';

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
			this.key = this.columnList.generateKey($attrs);
		}

		const column = this.columnList.extract(this.key, $attrs.type);

		this.columnList.copy(column, $attrs);

		// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
		if ($attrs.hasOwnProperty('value')) {
			column.$value = isUndefined(this.value) ? null : this.value;
		}

		if ($attrs.hasOwnProperty('label')) {
			column.$label = isUndefined(this.label) ? null : this.label;
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

			if (column.$value) {
				settings.$value = column.$value;
			}

			if (column.$label) {
				settings.$label = column.$label;
			}

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
		label: '&',
		compare: '<',
		key: '@'
	}
};