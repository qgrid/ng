import Directive from 'ng/directives/directive';
import AppError from 'core/infrastructure/error';
import templateScope from './template.scope';
import TemplatePath from 'core/template/template.path';
import resourceFactory from 'core/resource/resource.factory';
import {merge} from 'core/services/utility';
import {GRID_NAME, TEMPLATE_NAME} from 'ng/definition';

class Template extends Directive(TEMPLATE_NAME, merge({root: `^^${GRID_NAME}`}, TemplatePath.require)) {
	constructor() {
		super();
	}
}

function TemplateLink($scope, $element, $attr, ctrls, $transclude) {
	Template.link(...arguments);

	const ctrl = ctrls[0];
	const path = TemplatePath.get(ctrl);
	if (!ctrl.root.model.hasOwnProperty(path.model)) {
		throw new AppError(
			'template',
			`Appropriate model for "${path.model}" is not found`);
	}

	const model = ctrl.root.model[path.model];
	const state = model();
	if (!state.hasOwnProperty('resource')) {
		throw new AppError(
			'template',
			`Can't use "${path.model}" model, resource property is missed`
		);
	}

	$transclude(clone => {
		const content = clone.html();
		const contentScope = templateScope($scope, [ctrl.let]);
		const createResource = resourceFactory(state.resource, path.resource);
		const newResource = createResource(content, contentScope);
		model({resource: newResource});
	});
}

Template.$inject = ['$scope', '$element'];

export default {
	transclude: 'element',
	priority: 600,
	terminal: true,
	restrict: 'E',
	require: Template.require,
	link: TemplateLink,
	controller: Template,
	bindToController: {
		for: '@',
		let: '@'
	}
};