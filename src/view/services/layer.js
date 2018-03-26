export class Layer {
	constructor($scope, element, template, id, resource) {
		this.$scope = $scope;
		this.element = element;
		this.template = template;

		const link = this.template.link(
			`qgrid.${id}.tpl.html`,
			resource,
			[id]
		);

		const $element = angular.element(this.element);
		this.$layerScope = this.$scope.$new();
		link($element, this.$layerScope);
	}

	destroy() {
		this.element.remove();
		if (this.$layerScope) {
			this.$layerScope.$destroy();
			this.$layerScope = null;
		}
	}
}
