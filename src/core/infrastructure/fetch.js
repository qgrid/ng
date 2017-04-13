import {isFunction, noop} from 'core/services/utility';

export default class Fetch {
	constructor(source) {
		this.source = source;
		this.busy = null;
		this.result = null;
	}

	run() {
		const fetch = isFunction(this.source) ? this.source(...arguments) : this.source;
		this.busy = new Promise(resolve => {
			Promise.resolve(fetch).then(result => {
				this.result = result;
				if (this.busy) {
					resolve(false);
				}
			}).catch(ex => {
				resolve(false);
				throw ex;
			});
		});
	}

	reset() {
		this.result = null;
		this.busy = null;
	}
}