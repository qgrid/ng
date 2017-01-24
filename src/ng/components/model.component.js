import Component from './component';
import ModelBinder from '../../core/infrastructure/model.bind';
import {noop} from '../../core/services/utility';
import * as guard from '../../core/infrastructure/guard';

export default class ModelComponent extends Component {
	constructor(...names) {
		super();

		const self = this;
		const binder = new ModelBinder(self);
		let commit = noop;

		function setup(model) {
			return binder.bind(model, names, false);
		}

		self.$onChanges = () => {
			commit();
		};

		self.$onInit = () => {
			guard.notNull(self.root, 'root');

			const model = self.root.model;
			if (model) {
				commit = setup(model);
				commit();
			}

			self.onInit();
		};

		self.$onDestroy = () => {
			binder.bind(null);
			self.onDestroy();
		};
	}
}