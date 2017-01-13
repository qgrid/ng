'use strict';

import {noop} from '../services/utility';

export default class ModelBinder {
	constructor(source) {
		this.source = source;
		this.off = noop;
	}

	bind(model, name, run = true) {
		this.off();
		const source = this.source;

		if (model) {
			const doBind = e => {
				for (let key of Object.keys(e.changes)) {
					if (!source.hasOwnProperty(key)) {
						throw new Error(
							`model.${name}`,
							`"${key}" is not a valid key, only ${Object.keys(source).join(', ')} keys are supported`
						);
					}

					source[key] = e.changes[key];
				}
			};

			const state = model[name];

			if (run) {
				doBind({changes: state()});
			}

			this.off = model[name + 'Changed'].on(doBind);

			return () => {
				const oldState = state();
				const newState = {};
				for (let key of Object.keys(oldState)) {
					if (source.hasOwnProperty(key)) {
						newState[key] = source[key];
					}
				}

				state(newState);
			};
		}

		this.off = noop;
		return noop;
	}
}