import Component from './component';

export default class PluginComponent extends Component {
	constructor() {
		super();
	}

	get model() {
		const model = this.gridModel || (this.view && this.view.model);
		if (!model) {
			throw new Error('pager', 'Model is not defined');
		}

		return model;
	}
}