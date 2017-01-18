'use strict';

import Component from '../component';
import Error from '../../core/infrastructure/error';
import {clone, isUndefined} from '../../core/services/utility';
import {GRID_NAME, TEMPLATE_NAME, COLUMN_NAME} from '../../definition';

class Template extends Component {
	constructor($element) {
		super();
		this.$element = $element;
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
		const resource = clone(state.resource);
		if (resource.hasOwnProperty(key)) {
			throw new Error(
				'template',
				`Ambiguous key "${key}" for "${this.for}"`);
		}

		resource[key] = this.$element[0].innerHTML;
		model({resource: resource});
	}
}

Template.$inject = ['$element'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		column: `?^^${COLUMN_NAME}`
	},
	controller: Template,
	bindings: {
		for: '@'
	}
};