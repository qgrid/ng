import Component from '@grid/view/components/component';
import TemplateLink from '@grid/view/components/template/template.link';
import {TemplatePath} from '@grid/core/template';
import {EXPORT_NAME, EXPORT_FORMAT_NAME} from '../definition';
TemplatePath
	.register(EXPORT_FORMAT_NAME, (template, element) => {
		return {
			model: `export-${template.for}-${element.type}`,
			resource: element.type
		};
	});

class ExportFormat extends Component {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$templateScope = null;
		this.template = new TemplateLink($compile, $templateCache);

		const model = this.export.model;
		const templateUrl = 'qgrid.plugin.export-format.tpl.html';
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			model.export().resource,
			[`${this.export.type}:format`]
		);

		link(this.$element, templateScope);
		this.$templateScope = templateScope;
	}
}

ExportFormat.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	controller: ExportFormat,
	require: {
		export: `^^${EXPORT_NAME}`
	},
	controllerAs: '$export'
};