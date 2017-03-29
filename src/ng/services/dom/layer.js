import Element from './element';
import AppError from 'core/infrastructure/error';

class LayerCore extends Element {
	resource() {
	}
}

export default class Layer extends LayerCore {
	constructor(element, template) {
		super(element);

		this.template = template;
		this.$scope = null;
	}

	static get empty() {
		return new LayerCore();
	}

	resource(id, state) {
		const link = this.template.link(
			`qgrid.${id}.tpl.html`,
			state,
			[id]
		);

		const $element = angular.element(this.element);
		const $scope = $element.scope();
		if (!$scope) {
			throw new AppError('element', `Scope for "${id}" is not found`)
		}

		this.$scope = $scope.$new();
		link($element, this.$scope);
	}

	destroy() {
		if (this.$scope) {
			this.$scope.$destroy();
			this.$scope = null;
		}
	}
}


