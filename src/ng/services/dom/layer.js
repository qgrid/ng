import {Element} from './element';

class LayerCore extends Element {
	resource() {
	}
}

const empty = new LayerCore();
export default class Layer extends LayerCore {
	constructor($scope, element, template) {
		super(element);

		this.$scope = $scope;
		this.template = template;
		this.$layerScope = null;
	}

	static get empty() {
		return empty;
	}

	resource(id, state) {
		const link = this.template.link(
			`qgrid.${id}.tpl.html`,
			state,
			[id]
		);

		const $element = angular.element(this.element);
		this.$layerScope = this.$scope.$new();
		link($element, this.$layerScope);
	}

	destroy() {
		if (this.$layerScope) {
			this.$layerScope.$destroy();
			this.$layerScope = null;
		}
	}
}


