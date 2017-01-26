import Model from '../../core/infrastructure/model';
import ModelBinder from '../../core/infrastructure/model.bind';
import {noop} from '../../core/services/utility';
import Event from '../../core/infrastructure/event';

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

		self.modelChanged = new Event();

		self.$onChanges = (e) => {
			if (e.hasOwnProperty('model')) {
				commit = setup();
				commit();

				self.modelChanged.emit(self.model);
				self.onInit();
				return;
			}

			commit();
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