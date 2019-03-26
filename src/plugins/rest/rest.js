import PluginComponent from '../plugin.component';
import { RestView } from '@grid/plugin/rest/rest.view';

const Plugin = PluginComponent('data-manipulation', { inject: ['$http'], models: ['rest'] });
class RestPlugin extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.rest = new RestView(this.model, {
			get: (url, params) => new Promise((resolve, reject) =>
				this.$http
					.get(url, { params })
					.then(result => resolve(result.data))
					.catch(reject)
			),
			post: (url, data) => new Promise((resolve, reject) =>
				this.$http
					.post(url, { data })
					.then(result => resolve(result.data))
					.catch(reject)
			)
		});
	}
}

export default RestPlugin.component({
	controller: RestPlugin,
	controllerAs: '$restPlugin',
	bindings: {
		restUrl: '<url',
		restMethod: '<method',
		restSerialize: '<serialize'
	}
});