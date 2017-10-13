import Directive from '@grid/view/directives/directive';
import templateScope from './template.scope';
import {GRID_NAME, OUTLET_TEMPLATE_NAME, OUTLET_HOST} from '@grid/view/definition';

class OutletTemplate extends Directive(OUTLET_TEMPLATE_NAME) {
	constructor($scope, $element, $attrs, $templateCache) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
	}

	onInit() {
		const content = this.$element.html();
		const scope = templateScope(this.$attrs.let, this.let);
		const data = {content};
		this.host.resource = new Resource(data, scope);
		this.host.container = this.$element;
	}
}

OutletTemplate.$inject = ['$scope', '$element', '$attrs', '$templateCache'];

export default {
	terminal: true,
	restrict: 'E',
	require: OutletTemplate.require,
	link: OutletTemplate.link,
	controller: OutletTemplate,
	bindToController: {
		for: '@',
		let: '<'
	}
};