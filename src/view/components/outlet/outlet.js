import Directive from './directive';
import {GRID_NAME, OUTLET_NAME} from '@grid/view/definition';
import TemplateLink from '../components/template/template.link';

class Outlet extends Directive(OUTLET_NAME) {
	constructor($scope, $element, $attrs, $compile, $templateCache) {
		super();

		this.id = $attrs[OUTLET_NAME];
		this.container = $element;
		this.resource = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	link() {
		const id = this.id;
		const link = this.template.link(
			`qgrid.outlet.${id}.tpl.html`,
			resource,
			[id, '$default']
		);

		link(this.container, this.$scope);
	}

	get model() {
		return this.root.model;
	}
}

Outlet.$inject = ['$scope', '$element', '$attrs', '$compile', '$templateCache'];

export default {
	restrict: 'A',
	controller: Outlet,
	controllerAs: '$outlet',
	require: Outlet.require,
	link: Outlet.link,
	scope: true
};

