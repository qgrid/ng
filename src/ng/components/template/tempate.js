import Component from '../component';
import AppError from 'core/infrastructure/error';
import templateScope from './template.scope';
import TemplatePath from '../template/template.path';
import resourceFactory from 'core/resource/resource.factory';
import {merge} from 'core/services/utility';
import {GRID_NAME} from 'src/definition';

class Template extends Component {
	constructor($scope, $element) {
		super();

		this.$element = $element;
		this.$scope = $scope;
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

		const content = this.$element[0].innerHTML || this.$element[0].textContent;
		const contentScope = templateScope(this.$scope, [this.let]);
		const createResource = resourceFactory(state.resource, path.resource);
		const newResource = createResource(content, contentScope);
		model({resource: newResource});
	}
}

Template.$inject = ['$scope', '$element'];

export default {
	require: merge({root: `^^${GRID_NAME}`}, TemplatePath.require),
	controller: Template,
	bindings: {
		for: '@',
		let: '@'
	}
};