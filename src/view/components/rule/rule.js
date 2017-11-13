import Directive from '@grid/view/directives/directive';
import {AppError} from '@grid/core/infrastructure';
import ruleScope from './rule.scope';
import {RulePath} from '@grid/core/rule';
import {factory as resourceFactory} from '@grid/core/resource';
import {merge} from '@grid/core/utility';
import {GRID_NAME, RULE_NAME} from '@grid/view/definition';

class Rule extends Directive(RULE_NAME, merge({
	root: `^^${GRID_NAME}`
}, RulePath.require)) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
	}

	onInit() {
		const rule = RulePath.get(this);
		if (!this.root.model.hasOwnProperty(rule.model)) {
			throw new AppError(
				'rule',
				`Appropriate model for "${rule.model}" is not found`);
		}

		const model = this.root.model[rule.model];
		const state = model();
		if (!state.hasOwnProperty('resource')) {
			throw new AppError(
				'rule',
				`Can't use "${rule.model}" model, resource property is missed`
			);
		}

		const content = this.$element.html();
		const contentScope = ruleScope(this.$attrs.let, this.let);
		const createResource = resourceFactory(state.resource, rule.resource);
		const newResource = createResource(content, contentScope);
		model({resource: newResource});
	}
}

Rule.$inject = ['$scope', '$element', '$attrs'];

export default {
	terminal: true,
	restrict: 'E',
	require: Rule.require,
	link: Rule.link,
	controller: Rule,
	controllerAs: '$rule',
	bindToController: {
		for: '@',
		let: '<'
	}
};