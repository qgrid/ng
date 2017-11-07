import {clone} from '../utility';

export class PersistenceService {
	constructor(model) {
		this.model = model;
	}

	save(settings) {
		const gridModel = this.model;
		settings = settings || gridModel.persistence().settings;

		const model = {};
		for (let key of settings) {
			const source = gridModel[key];
			for (let p of source) {
				const value = source[p]();
				model[source] = clone(value);
			}
		}

		return model;
	}

	load(model, settings) {
		const gridModel = this.model;
		settings = settings || gridModel.persistence().settings;

		for (let key of settings) {
			const source = model[key];
			const target = gridModel[key];
			for (let p of source) {
				const value = target[p];
				source({
					p: clone(value)
				});
			}
		}

		return model;
	}
}