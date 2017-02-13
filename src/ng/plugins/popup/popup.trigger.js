import Component from 'ng/components/component';
import TemplateLink from 'ng/components/template/template.link';
import {POPUP_NAME} from '../definition';

class PopupTrigger extends Component {
	constructor($scope, $element, $compile, $templateCache, qGridPopupService) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.qGridPopupService = qGridPopupService;
		this.$templateScope = null;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const model = this.popup.model;
		const templateUrl = `qgrid.plugin.popup-trigger.tpl.html`;
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			model.popup().resource,
			[`${this.popup.id}:trigger`]
		);

		link(this.$element, templateScope);
		this.$templateScope = templateScope;
	}

	onDestroy() {
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}
	}

	open() {
		const popup = this.popup;
		const settings = {id: popup.id};
		this.qGridPopupService.open(settings, popup.model);
	}
}

PopupTrigger.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'qGridPopupService'
];

export default {
	controller: PopupTrigger,
	require: {
		popup: `^^${POPUP_NAME}`
	},
	controllerAs: '$popup'
};