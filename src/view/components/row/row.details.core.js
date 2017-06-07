import Directive from '@grid/view/directives/directive';
import TemplateLink from '../template/template.link';
import {VIEW_CORE_NAME, ROW_DETAILS_CORE_NAME} from '@grid/view/definition';

class RowDetailsCore extends Directive(ROW_DETAILS_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const model = this.model;
		model.rowChanged.watch((e) => {
			if (e.hasChanges('mode')) {
				if (model.row().unit === 'details') {
					this.show();
				} else {
					this.hide();
				}
			}
		});
	}

	show() {
		const state = this.model.row();
		const templateUrl = `qgrid.body.row.details.tpl.html`;
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			state.resource,
			['details', '$default']
		);

		link(this.$element, templateScope);
	}

	hide() {
		if (this.templateScope) {
			this.templateScope.$destroy();
			this.$element[0].innerHTML = '';
		}
	}

	get isShown() {
		return this.templateScope !== null;
	}

	get row() {
		return this.$scope.$row.row;
	}

	get model() {
		return this.view.model;
	}
}

RowDetailsCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$details',
	controller: RowDetailsCore,
	require: RowDetailsCore.require,
	link: RowDetailsCore.link
};