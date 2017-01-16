'use strict';

import ModelComponent from '../model.component';
import {GRID_NAME} from '../../defenition';

class BodyTemplate extends ModelComponent {
	constructor() {
		super('body');
	}
}

BodyTemplate.$inject = ['$element', '$transclude'];

export default {
	require: {
		root: `^${GRID_NAME}`
	},
	controller: BodyTemplate,
	bindings: {
		'bodyResource': '<resource'
	}
};