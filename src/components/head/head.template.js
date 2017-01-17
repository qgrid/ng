'use strict';

import ModelComponent from '../model.component';
import {GRID_NAME} from '../../definition';

class HeadTemplate extends ModelComponent {
	constructor() {
		super('head');
	}
}

HeadTemplate.$inject = [];

export default {
	require: {
		root: `^${GRID_NAME}`
	},
	controller: HeadTemplate,
	bindings: {
		headSticky: '<sticky',
		headResource: '<resource'
	}
};