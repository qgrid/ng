import {isFunction, isUndefined} from 'core/services/utility';

export default class Fetch {
	constructor(select) {
		this.select = select;
		this.busy = null;
		this.result = null;
	}

	run() {
		const select = this.select;

		this.result = null;
		let alive = true;
		this.busy = new Promise((resolveBusy, rejectBusy) => {
			const resolve = data => {
				if (alive) {
					this.result = data;
					resolveBusy();
				}
			};

			if (isFunction(select)) {
				const deferred = {
					resolve: resolve,
					reject: rejectBusy
				};

				const result = select(...arguments, deferred);
				if (!isUndefined(result)) {
					if (isFunction(result.then)) {
						// when options.fetch returns promise
						result.then(resolve);
						if (isFunction(result.catch)) {
							result.catch(rejectBusy);
						}
					} else {
						// when options.fetch return result
						resolve(result);
					}
				}
				// when user should invoke d.resolve or d.reject
			}
			else {
				// when options.fetch is result itself
				resolve(select);
			}
		});

		return () => {
			this.busy = null;
			alive = false;
		};
	}
}