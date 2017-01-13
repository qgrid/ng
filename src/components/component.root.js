'use strict';

import Model from '../core/infrastructure/model';
import ModelBinder from '../core/infrastructure/model.bind';
import {noop} from '../core/services/utility';

export default class RootComponent {
	constructor(name) {
		const self = this;
		const binder = new ModelBinder(self);
		let commit = noop;

		function setup() {
			let run = true;
			if (!self.model) {
				self.model = new Model();
				run = false;
			}

			return binder.bind(self.model, name, run);
		}

		self.$onChanges = function (e) {
			if (e.model.currentValue !== e.model.previousValue) {
				commit = setup();
				return;
			}

			commit();
		};

		self.$onDestroy = function () {
			binder.bind(null);
		};
	}
}