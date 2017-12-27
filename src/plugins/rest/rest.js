import PluginComponent from '../plugin.component';
import {Rest} from '@grid/plugin/rest/rest';

const Plugin = PluginComponent('data-manipulation', {inject: ['$http']});

class RestPlugin extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		new Rest(this.model, {
			url: this.url,
			method: this.method,
			get: (url, params) => this.$http.get(url, {params}),
			post: (url, data) => this.$http.post(url, {data}),
			serialize: this.serialize
		});
	}
}

export default RestPlugin.component({
	controller: RestPlugin,
	controllerAs: '$restPlugin',
	bindings: {
		url: '<',
		method: '<',
		serialize: '<'
	}
});