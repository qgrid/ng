import Component from './component';
import ModelBinder from 'core/infrastructure/model.bind';
import {noop} from 'core/services/utility';
import * as guard from 'core/infrastructure/guard';

export default class ModelComponent extends Component {
	constructor(...names) {
		super();

		const self = this;
		this.binder = new ModelBinder(self);
		this.commit = noop;

		this.setup = () => this.binder.bind(this.model, names, false);
	}

	onInitCore() {
		this.commit = this.setup();
		this.commit();

		super.onInitCore();
	}

	onDestroyCore() {
		this.binder.bind(null);
		super.onDestroyCore();
	}

	get model() {
		guard.notNull(this.root, 'root');

		return this.root.model;
	}
}