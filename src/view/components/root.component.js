import {Model, ModelBinder, Event} from '@grid/core/infrastructure';
import {noop} from '@grid/core/utility';
import {DisposableView} from '@grid/core/view';

export default class RootComponent extends DisposableView {
	constructor(...names) {
		super();

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
		this.dispose();
	}
}