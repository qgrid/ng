import {Element} from './element';
import AppError from 'core/infrastructure/error';

class LayerCore extends Element {
	resource() {
	}
}
const empty = new LayerCore();

export default class Layer extends LayerCore {
	constructor(element, template) {
		super(element);

		this.template = template;
		this.$scope = null;
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
		const ctrl = $element.controller();
		if (!ctrl) {
			throw new AppError('layer', `Ctrl for "${id}" is not found`)
		}

		const $scope = ctrl.$scope;
		if(!$scope){
			throw new AppError('layer', `Ctrl.scope for "${id}" is not found`)
		}

		this.$scope = $scope.$new();
		link($element, $scope);
	}

	destroy() {
		if (this.$scope) {
			this.$scope.$destroy();
			this.$scope = null;
		}
	}
}


