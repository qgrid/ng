import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/command';

const Plugin = PluginComponent('persistence', {inject: ['qgrid']});
class Peresistence extends Plugin {
	constructor() {
		super(...arguments);

		this.submit = new Command({
			execute: () => {
				this.onSubmit();
			}
		});

		this.cancel = new Command({
			execute: () => {
				this.reset.execute();
				this.onCancel();
			}
		});

		this.reset = new Command({
			execute: () => {

				this.service.invalidate('persistence');
			}
		});
	}

	onInit() {
		const model = this.model;
		this.service = this.qgrid.service(model);
	}
}

export default Peresistence.component({
	controller: Peresistence,
	controllerAs: '$persistence',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&'
	}
});