import ModelComponent from '../model.component';
import * as ng from 'ng/services/ng';
import * as path from 'core/services/path'
import {isUndefined, clone, isObject, identity} from 'core/services/utility';
import {parseFactory, getType} from 'core/services/convert';
import {GRID_NAME} from 'ng/definition';

class ColumnList extends ModelComponent {
	constructor($scope, $parse) {
		super('columnList');

		this.$scope = $scope;
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
	}

	add(column) {
		const columnList = this.root.model.columnList;
		columnList({
			columns: columnList().columns.concat([column])
		});
	}

	register(column) {
		const columnList = this.root.model.columnList;
		const reference = clone(columnList().columns);
		reference[column.type] = column;
		columnList({
			reference: reference
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