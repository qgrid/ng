import Component from '../component';
import {GRID_NAME, COLUMN_NAME, COLUMN_LIST_NAME} from 'ng/definition';
import {clone, isObject, isUndefined, identity} from 'core/services/utility';
import TemplatePath from 'core/template/template.path';
import * as ng from 'ng/services/ng';
import * as path from 'core/services/path'
import * as columnService from 'core/column/column.service';
import columnFactory from 'core/column/column.factory';
import {parseFactory, getType} from 'core/services/convert';

TemplatePath
	.register(COLUMN_NAME, (template, column) => {
		return {
			model: template.for,
			resource: column.key
		};
	});

class Column extends Component {
	constructor($scope, $attrs, $parse) {
		super();

		this.$scope = $scope;
		this.$attrs = $attrs;
		this.$parse = $parse;
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

		if (source.hasOwnProperty('value')) {
			// HACK: to understand if need to pass {$row: row} instead of just row in cell.core.js
			target.$value = isUndefined(this.value) ? null : this.value;
		}
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
		if (withKey) {
			this.columnList.add(column);
		}
		else {
			this.columnList.register(column);
		}
	}
}

Column.$inject = ['$scope', '$attrs', '$parse'];

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