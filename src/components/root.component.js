'use strict';

import Model from '../core/infrastructure/model';
import ModelBinder from '../core/infrastructure/model.bind';
import {noop} from '../core/services/utility';

export default class RootComponent {
	constructor(...names) {
		const self = this;
		const binder = new ModelBinder(self);
		let commit = noop;

		function setup() {
			let run = true;
			if (!self.model) {
				self.model = new Model();
				run = false;
			}

			return binder.bind(self.model, names, run);
		}

		self.$onChanges = function (e) {
			if (e.hasOwnProperty('model')) {
				commit = setup();
				return;
			}

			commit();
		};

		self.$onInit = self.onInit;

		self.$onDestroy = function () {
			binder.bind(null);
			self.onDestroy();
		};
	}

	onInit() {
	}

	onDestroy() {
	}
}