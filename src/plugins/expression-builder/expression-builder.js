import {TemplatePath} from '@grid/core/template';
import PluginComponent from '../plugin.component';
import {EXPRESSION_BUILDER_FACTORY, EXPRESSION_BUILDER_NAME} from '../definition';

TemplatePath
	.register(EXPRESSION_BUILDER_NAME, () => {
		return {
			model: 'pagination',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('expression-builder', {
	inject: [EXPRESSION_BUILDER_FACTORY]
});

class ExpressionBuilder extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const ExpressionBuilderFactory = this[EXPRESSION_BUILDER_FACTORY];

		const schema = this.build(ExpressionBuilderFactory());

		this.node = schema.apply();
	}
}

export default ExpressionBuilder.component({
	controller: ExpressionBuilder,
	controllerAs: '$expressionBuilderPlugin',
	bindings: {
		build: '<'
	}
});