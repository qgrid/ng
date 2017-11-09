import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('title');
class Title extends Plugin {
	constructor() {
		super(...arguments);
	}

	get value() {
		return this.model.grid().title;
	}
}

export default Title.component({
	controller: Title,
	controllerAs: '$title'
});