import Component from '../component';
import Error from '../../../core/infrastructure/error';
import TemplateCore from '../template/template.core';
import {VIEW_CORE_NAME} from '../../../definition';

class Pager extends Component {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$scope = $scope;
		this.$element = $element;

		this.template = new TemplateCore($compile, $templateCache);
	}

	onInit() {
		const state = this.model.pager();
		const link = this.template.link(
			'qgrid.pager.tpl.html',
			state.resource,
			''
		);

		link(this.$element, this.$scope);
	}

	get model() {
		const model = this.gridModel || (this.view && this.view.model);
		if (!model) {
			throw new Error('pager', 'Model is not defined');
		}

		return model;
	}
}

Pager.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	controller: Pager,
	controllerAs: '$pager',
	require: {
		'view': `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		'gridModel': '<model'
	}
}