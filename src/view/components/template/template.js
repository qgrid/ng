import Directive from '@grid/view/directives/directive';
import {AppError} from '@grid/core/infrastructure';
import templateScope from './template.scope';
import {TemplatePath} from '@grid/core/template';
import {factory as resourceFactory} from '@grid/core/resource';
import {merge} from '@grid/core/utility';
import {GRID_NAME, TEMPLATE_NAME} from '@grid/view/definition';

class Template extends Directive(TEMPLATE_NAME, merge({
	root: `^^${GRID_NAME}`
}, TemplatePath.require)) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
	}

	onInit() {
		const path = TemplatePath.get(this);
		if (!this.root.model.hasOwnProperty(path.model)) {
			throw new AppError(
				'template',
				`Appropriate model for "${path.model}" is not found`);
		}

		const model = this.root.model[path.model];
		const state = model();
		if (!state.hasOwnProperty('resource')) {
			throw new AppError(
				'template',
				`Can't use "${path.model}" model, resource property is missed`
			);
		}

		const content = this.$element.html();
		const contentScope = templateScope(this.$attrs.let, this.let);
		const createResource = resourceFactory(state.resource, path.resource);
		const newResource = createResource(content, contentScope);
		model({resource: newResource});
	}
}

Template.$inject = ['$scope', '$element', '$attrs'];

export default {
	terminal: true,
	restrict: 'E',
	require: Template.require,
	link: Template.link,
	controller: Template,
	controllerAs: '$template',
	bindToController: {
		for: '@',
		let: '<'
	}
};