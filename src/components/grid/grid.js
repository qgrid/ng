'use strict';

import Model from '../../core/infrastructure/model';
import ModelBinder from '../../core/infrastructure/model.bind';
import {noop} from '../../core/services/utility';

export default {
	templateUrl: 'qgrid.html',
	controller: Controller,
	bindings: {
		rows: '<',
		columns: '<',
		model: '<'
	}
};

Controller.$inject = [];
function Controller() {
	const ctrl = this;
	const binder = new ModelBinder(ctrl);
	let model = null;
	let commit = noop;

	function setup() {
		if (!ctrl.model) {
			ctrl.model = new Model();
		}

		model = ctrl.model;
		commit = binder.bind(model, 'data');
	}

	setup();
	ctrl.$doCheck = function () {
		if (ctrl.model !== model) {
			setup();
		}
		else {
			commit();
		}
	};

	ctrl.$onDestroy = function () {
		binder.bind(null);
	};
}