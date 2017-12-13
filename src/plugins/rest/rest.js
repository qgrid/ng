import PluginComponent from '../plugin.component';
import {AppError} from '@grid/core/infrastructure';
import {Rest} from '@grid/plugin/rest/rest';

const Plugin = PluginComponent('data-manipulation', {inject: ['$http']});

class RestPlugin extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		if (!this.url) {
			throw new AppError('rest', 'REST endpoint is required');
		}

		this.method = (this.method || 'get').toLowerCase();

		let fetch;

		if (this.method === 'get') {
			fetch = params => this.$http.get(this.url, params);
		} else if (this.method === 'post') {
			fetch = params => this.$http.post(this.url, params);
		} else {
			throw new AppError('rest', `${this.method} is illegal. Use GET or POST`);
		}

		new Rest(this.model, {
			url: this.url,
			method: this.method,
			get: (url, params) => this.$http.get(url, params),
			post: (url, params) => this.$http.post(url, params),
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
		fetch: '<',
		serialize: '<'
	}
});