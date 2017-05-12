import ModelComponent from '../model.component';
import * as ng from '@grid/view/services/ng';
import {compile} from '@grid/core/services'
import {isUndefined, clone, isObject, identity} from '@grid/core/services/utility';
import {parseFactory, getType} from '@grid/core/services';
import {GRID_NAME} from '@grid/view/definition';

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
				const accessor = compile(key);
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