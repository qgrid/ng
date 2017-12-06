import {yes} from '@grid/core/utility';

export default function ExpressionBuilderFactory(ExpressionBuilder) {
	return () => {
		const builder = new ExpressionBuilder([
			{
				type: 'label',
				templateUrl: 'qgrid.plugin.expression-builder.label.tpl.html'
			},
			{
				type: 'input',
				templateUrl: 'qgrid.plugin.expression-builder.input.tpl.html'
			},
			{
				type: 'button',
				templateUrl: 'qgrid.plugin.expression-builder.button.tpl.html'
			},
			{
				type: 'select',
				templateUrl: 'qgrid.plugin.expression-builder.select.tpl.html',
				defaults: {
					trackBy: function (node, line, value) {
						return value;
					}
				}
			}
		], {
			defaults: {
				isVisible: yes
			}
		});

		return builder;
	};
}

ExpressionBuilderFactory.$inject = ['ExpressionBuilder'];
