import Directive from './directive';
import {GRID_NAME, OUTLET_HOST_NAME} from '@grid/view/definition';
import TemplateLink from '../components/template/template.link';

class OutletHost extends Directive(OUTLET_HOST_NAME) {
	constructor($scope, $element, $attrs, $compile, $outletCache) {
		super();

		this.id = $attrs[OUTLET_HOST_NAME];
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

OutletHost.$inject = ['$scope', '$element', '$attrs', '$compile', '$outletCache'];

export default {
	restrict: 'A',
	controller: OutletHost,
	controllerAs: '$outlet',
	require: OutletHost.require,
	link: OutletHost.link,
	scope: true
};

