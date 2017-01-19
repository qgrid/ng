'use strict';

import Directive from '../directive';
import {GRID_NAME, CELL_CORE_NAME} from '../../definition';

class CellCore extends Directive(CELL_CORE_NAME, {root: `^^${GRID_NAME}`}) {
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
			const sourceKey = $attrs[CELL_CORE_NAME];
			const state = this.root.model[sourceKey]();
			const resource = state.resource;
			const template = resource.hasOwnProperty(column.key)
				? resource[column.key]
				: resource.hasOwnProperty('$default')
					? resource['$default']
					: this.$templateCache.get(`qgrid.${sourceKey}.cell.tpl.html`);

			const linkTo = this.$compile('<!--qgrid: cell template-->' + template);
			const content = linkTo(this.$scope);
			this.$element.append(content);
		}
	}

	value() {
		const column = this.$scope.$column;
		const row = this.$scope.$row;

		return column.$value
			? column.$value({$row: row})
			: column.value
				? column.value(row)
				: row[column.key];
	}
}

CellCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: CellCore,
	require: CellCore.require,
	link: CellCore.link
};