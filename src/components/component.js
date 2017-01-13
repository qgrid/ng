'use strict';

import ModelBinder from '../core/infrastructure/model.bind';
import {noop} from '../core/services/utility';

export default class Component {
	constructor(...names) {
		const self = this;
		const binder = new ModelBinder(self);
		let commit = noop;

		function setup(model) {
			return binder.bind(model, names);
		}

		self.$onChanges = () => {
			commit();
		};

		self.$onInit = () => {
			if (self.root.model) {
				commit = setup(self.root.model);
			}

			root.modelChanged.on(model => commit = setup(model));
			self.onInit();
		};

		self.$onDestroy = () => {
			binder.bind(null);
			self.onDestroy();
		};
	}

	onInit() {
	}

	onDestroy() {
	}
}