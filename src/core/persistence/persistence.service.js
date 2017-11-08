import {clone} from '../utility';

export class PersistenceService {
	constructor(model) {
		this.model = model;
	}

	save(settings) {
		const gridModel = this.model;
		settings = settings || gridModel.persistence().settings;

		const model = {};
		for (const key in settings) {
			const source = gridModel[key];
			for (const p in source) {
				const value = source[p]();
				model[source] = clone(value);
			}
		}

		return model;
	}

	load(model, settings) {
		const gridModel = this.model;
		settings = settings || gridModel.persistence().settings;

		for (let key in settings) {
			const source = model[key];
			const target = gridModel[key];
			for (let p in source) {
				const value = target[p];
				source({
					p: clone(value)
				});
			}
		}

		return model;
	}
}