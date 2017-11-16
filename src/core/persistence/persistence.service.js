import {clone, isArray, isObject} from '../utility';
import {stringifyFactory} from '../services';

export class PersistenceService {
	constructor(model) {
		this.model = model;
	}

	save(settings) {
		const gridModel = this.model;
		settings = settings || gridModel.persistence().settings;

		const model = {};
		for (const key in settings) {
			const source = gridModel[key]();
			const target = {};
			model[key] = target;
			for (const p of settings[key]) {
				const value = source[p];
				target[p] = clone(value);
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
			target(source);
		}

		return model;
	}

	active(model, settings) {
		settings = settings || this.model.persistence().settings;

		for (let key in settings) {
			const gridModel = this.model[key]();
			const itemModel = model[key];
			const isEqual = settings[key].every(s => JSON.stringify(gridModel[s]) === JSON.stringify(itemModel[s]));
			if (isEqual) {
				continue;
			}
			return false;
		}
		return true;
	}

	stringify(model, settings) {
		let result = '';
		settings = settings || this.model.persistence().settings;

		for (let key in settings) {
			const stringify = stringifyFactory(key);
			const target = stringify(model[key]);
			if (target !== '') {
				result += `${target}; `;
			}
		}

		return result.trim();
	}
}