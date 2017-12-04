import ModelComponent from '../model.component';
import * as ng from '@grid/view/services/ng';
import { isUndefined, isObject, identity } from '@grid/core/utility';
import { parseFactory } from '@grid/core/services';
import { GRID_NAME } from '@grid/view/definition';
import { ColumnListCtrl } from '@grid/core/column-list/column.list.ctrl';

class ColumnList extends ModelComponent {
	constructor($scope, $parse) {
		super('columnList');

		this.$scope = $scope;
		this.$parse = $parse;
	}

	onInit() {
		const model = this.root.model;
		const $parse = this.$parse;
		const $scope = this.$scope;

		const canCopy = (key, source) =>
			!(ng.isSystem(key) ||
				isUndefined(source[key]) ||
				key === 'value' ||
				key === 'label');

		const ngParseFactory = type => {
			const parse = parseFactory(type);
			if (parse !== identity) {
				return parse;
			}

			return (value, source) =>
				isObject(source)
					? $parse(value)($scope.$parent)
					: value;
		};

		this.ctrl = new ColumnListCtrl(model, canCopy, ngParseFactory);
	}

	copy(target, source) {
		this.ctrl.copy(target, source);
	}

	add(column) {
		this.ctrl.add(column);
	}

	register(column) {
		this.ctrl.register(column);
	}
}

ColumnList.$inject = ['$scope', '$parse'];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ColumnList,
	controllerAs: '$columnList',
	bindings: {
		columnListGeneration: '@generation'
	}
};