import Component from '../component';
import {Grid} from '../grid/grid';
import Error from '../../../core/infrastructure/error';
import Resource from '../../../core/resource/resource';
import {isUndefined} from '../../../core/services/utility';
import {GRID_NAME, TEMPLATE_NAME, COLUMN_NAME, TOOLBAR_NAME} from '../../../definition';

class Template extends Component {
	constructor($scope, $element) {
		super();

		this.$element = $element;
		this.$scope = $scope;
	}

	onInit() {
		const path = this.path();
		if (!this.root.model.hasOwnProperty(path.name)) {
			throw new Error(
				'template',
				`Appropriate model for "${path.name}" is not found`);
		}

		const model = this.root.model[path.name];
		const state = model();
		if (!state.hasOwnProperty('resource')) {
			throw new Error(
				'template',
				`Can't use "${path.name}" model, resource property is missed`
			);
		}

		const newState = {};
		const resourceData = state.resource.data;
		let key = path.key;
		if (state.hasOwnProperty('count')) {
			let keyIndex = 1;
			const originKey = key;
			while (resourceData.hasOwnProperty(key)) {
				key = originKey + keyIndex++;
			}

			if (state.count < keyIndex) {
				newState.count = keyIndex;
			}
		}
		else if (resourceData.hasOwnProperty(key)) {
			throw new Error(
				'template',
				`Ambiguous key "${key}" for "${path.name}"`);
		}

		resourceData[key] = this.$element[0].innerHTML;
		const resourceScope = {};
		if (!isUndefined(this.let)) {
			if (isUndefined(this.$scope[this.let])) {
				throw new Error(
					'template',
					`"${this.let}" is not defined for "${path.name}.${key}"`
				);
			}

			const letScope = this.findLetScope();
			if (letScope === null) {
				throw new Error(
					'template',
					`Environment scope is not found for "${path.name}.${key}"`
				);
			}
			resourceScope[this.let] = letScope[this.let];
		}

		newState.resource = new Resource(resourceData, resourceScope);
		model(newState);
	}

	path(){
		if(this.column){
			return {
				name: this.for,
				key: this.column.key
			};
		}

		if(this.toolbar){
			return {
				name: 'toolbar',
				key: this.for
			};
		}

		throw new Error(
			'template',
			`Templating controller, required by directive "${TEMPLATE_NAME}" can't be found`);
	}

	findLetScope() {
		// When trasclusion applies, transclusion scope is a sibling for the owner scope,
		// so we searching in siblings of parents
		const test = this.testLetScope;
		let current = this.$scope;
		while (current) {
			const letScope = test(current.$$prevSibling) || test(current.$$nextSibling); // eslint-disable-line angular/no-private-call
			if (letScope) {
				return letScope;
			}

			current = current.$parent;
		}

		return null;
	}

	testLetScope(scope) {
		if (scope && scope.hasOwnProperty('$grid') && scope.$grid instanceof Grid) {
			return scope.$parent;
		}

		return null;
	}
}

Template.$inject = ['$scope', '$element'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		column: `?^^${COLUMN_NAME}`,
		toolbar: `?^^${TOOLBAR_NAME}`
	},
	controller: Template,
	bindings: {
		for: '@',
		let: '@'
	}
};