import {noop, toCamelCase, isUndefined} from '../services/utility';

export default class ModelBinder {
	constructor(source) {
		this.source = source;
		this.off = noop;
	}

	bind(model, names, run = true) {
		this.off();
		const source = this.source;

		if (model) {
			const commits = [];
			for (let name of names) {
				const doBind = e => {
					for (let key of Object.keys(e.changes)) {
						const sourceKey = toCamelCase(name, key);
						if (!source.hasOwnProperty(sourceKey)) {
							throw new Error(
								`model.${name}`,
								`"${key}" is not a valid key, only [${Object.keys(source).join(', ')}] keys are supported`
							);
						}

						source[sourceKey] = e.changes[key].newValue;
					}
				};

				const state = model[name];

				if (run) {
					doBind({changes: state()});
				}

				this.off = model[name + 'Changed'].on(doBind);

				commits.push(() => {
					const oldState = state();
					const newState = {};
					for (let key of Object.keys(oldState)) {
						const sourceKey = toCamelCase(name, key);
						if (source.hasOwnProperty(sourceKey)) {
							let value = source[sourceKey];
							if (!isUndefined(value)) {
								newState[key] = value;
							}
						}
					}

					state(newState);
				});
			}

			return () => commits.forEach(commit => commit());
		}

		this.off = noop;
		return noop;
	}
}