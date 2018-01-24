import {yes} from '@grid/core/utility';

export default function ExpressionBuilderFactory(ExpressionBuilder) {
	return () => {
		const builder = new ExpressionBuilder([
			{
				type: 'autocomplete',
				templateUrl: 'qgrid.plugin.expression-builder.autocomplete.tpl.html'
			},
			{
				type: 'button',
				templateUrl: 'qgrid.plugin.expression-builder.button.tpl.html'
			},
			{
				type: 'label',
				templateUrl: 'qgrid.plugin.expression-builder.label.tpl.html'
			},
			{
				type: 'multiselect',
				templateUrl: 'qgrid.plugin.expression-builder.multiselect.tpl.html'
			},
			{
				type: 'input',
				templateUrl: 'qgrid.plugin.expression-builder.input.tpl.html'
			},
			{
				type: 'iconButton',
				templateUrl: 'qgrid.plugin.expression-builder.icon.button.tpl.html'
			},
			{
				type: 'select',
				templateUrl: 'qgrid.plugin.expression-builder.select.tpl.html',
				defaults: {
					trackBy: (node, line, value) => value
				}
			}
		], {
			defaults: {
				isVisible: yes,
				isValid: node => node.attr('placeholder') || (!this.state || !this.state.length)
			}
		});

		return builder;
	};
}

ExpressionBuilderFactory.$inject = ['ExpressionBuilder'];
