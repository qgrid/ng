import Component from '../component';
import Error from '../../core/infrastructure/error';
import Resource from '../../core/entity/resource';
import {isUndefined} from '../../core/services/utility';
import {GRID_NAME, TEMPLATE_NAME, COLUMN_NAME} from '../../definition';

class Template extends Component {
	constructor($scope, $element) {
		super();

		this.$element = $element;
		this.$scope = $scope;
	}

	key() {
		const key = (this.column && this.column.key);
		if (isUndefined(key)) {
			throw new Error(
				'template',
				`Controller "${COLUMN_NAME}", required by directive "${TEMPLATE_NAME}" can't be found`);
		}

		return key;
	}

	onInit() {
		if (!this.root.model.hasOwnProperty(this.for)) {
			throw new Error(
				'template',
				`Appropriate model for "${this.for}" is not found`);
		}

		const model = this.root.model[this.for];
		const state = model();

		if (!state.hasOwnProperty('resource')) {
			throw new Error(
				'template',
				`Can't use "${this.for}" model, resource property is missed`
			);
		}

		const key = this.key();
		const resourceData = state.resource.data;
		if (resourceData.hasOwnProperty(key)) {
			throw new Error(
				'template',
				`Ambiguous key "${key}" for "${this.for}"`);
		}

		resourceData[key] = this.$element[0].innerHTML;
		const resourceScope = {};
		if (!isUndefined(this.let)) {
			if (isUndefined(this.$scope[this.let])) {
				throw new Error(
					'template',
					`"${this.let}" is not defined for "${this.for}.${key}"`
				);
			}

			const letScope = this.findLetScope();
			resourceScope[this.let] = letScope[this.let];
		}

		model({
			resource: new Resource(resourceData, resourceScope)
		});
	}

	findLetScope() {
		return this.$scope.$parent.$parent;
	}
}

Template.$inject = ['$scope', '$element'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		column: `?^^${COLUMN_NAME}`
	},
	controller: Template,
	bindings: {
		for: '@',
		let: '@'
	}
};