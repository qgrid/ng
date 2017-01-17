'use strict';

import Directive from '../directive';
import {GRID_NAME, CELL_NAME} from '../../definition';

class Cell extends Directive(CELL_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$compile = $compile;
		this.$templateCache = $templateCache;
	}

	onInit($attrs) {
		const column = this.$scope.$column;
		if (column) {
			const sourceKey = $attrs[CELL_NAME];
			const source = this.root.model[sourceKey]();
			const resource = source.resource;
			const template = resource.hasOwnProperty(column.key)
				? resource[column.key]
				: this.$templateCache.get(`qgrid.${sourceKey}.cell.html`);

			const linkTo = this.$compile('<!--qgrid: cell template-->' + template);
			const content = linkTo(this.$scope);
			this.$element.append(content);
		}
	}

	value() {
		const column = this.$scope.$column;
		const row = this.$scope.$row;

		return column.value ? column.value(row) : row[column.key];
	}
}

Cell.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: Cell,
	require: Cell.require,
	link: Cell.link
};