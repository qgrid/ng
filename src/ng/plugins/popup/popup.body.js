import Component from 'ng/components/component';
import TemplateLink from 'ng/components/template/template.link';

class PopupBody extends Component {
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
		const templateUrl = `qgrid.plugin.popup-body.tpl.html`;
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			model.popup().resource,
			[`${this.id}:body`]
		);

		link(this.$element, templateScope);
		this.$templateScope = templateScope;
	}

	onDestroy(){
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}
	}
}

PopupBody.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'qGridPopupService'
];

export default {
	controller: PopupBody,
	controllerAs: '$popupBody',
	bindings: {
		model: '<',
		id: '<'
	}
};