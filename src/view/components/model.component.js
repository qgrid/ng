import Component from './component';
import {Guard, ModelBinder} from '@grid/core/infrastructure';
import {noop} from '@grid/core/services/utility';

export default class ModelComponent extends Component {
	constructor(...names) {
		super();

		const self = this;
		this.binder = new ModelBinder(self);
		this.commit = noop;

		this.$onChanges = this.onChangeCore();

		this.setup = () => this.binder.bind(this.model, names, false);
	}

	onInitCore() {
		this.commit = this.setup();
		this.commit();

		super.onInitCore();
	}

	onChangeCore() {
		this.commit();
		super.onChangeCore();
	}

	onDestroyCore() {
		this.binder.bind(null);
		super.onDestroyCore();
	}

	get model() {
		Guard.notNull(this.root, 'root');

		return this.root.model;
	}
}