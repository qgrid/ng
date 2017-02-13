import Component from 'ng/components/component';
import TemplateLink from 'ng/components/template/template.link';

class PopupHead extends Component {
	constructor($scope, $element, $compile, $templateCache, qGridPopupService) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.qGridPopupService = qGridPopupService;
		this.$templateScope = null;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const model = this.model;
		const templateUrl = `qgrid.plugin.popup-head.tpl.html`;
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			model.popup().resource,
			[`${this.id}:head`]
		);

		link(this.$element, templateScope);
		this.$templateScope = templateScope;
	}

	onDestroy() {
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}
	}
}

PopupHead.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'qGridPopupService'
];

export default {
	controller: PopupHead,
	controllerAs: '$popupHead',
	bindings: {
		model: '<',
		id: '<'
	}
};