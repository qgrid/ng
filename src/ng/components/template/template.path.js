import AppError from 'core/infrastructure/error';
import {isUndefined} from 'core/services/utility';
import {TEMPLATE_NAME} from 'src/definition';

const resolvers = {};
export default class TemplatePath {
	constructor() {
	}

	static register(name, resolve) {
		if (resolvers.hasOwnProperty(name)) {
			throw new AppError(
				`template.path`,
				`"${name}" is already registered`);
		}


		resolvers[name] = resolve;
		return TemplatePath;
	}

	static get(source) {
		const path = this.find(source);
		if (!path) {
			throw new AppError(
				'template.path',
				`Template path, required by directive "${TEMPLATE_NAME}" can't be found`);
		}

		return path;
	}

	static find(source) {
		for (let key of Object.keys(resolvers)) {
			const name = '_' + key;
			const value = source[name];
			if (!isUndefined(value) && value !== null) {
				const path = resolvers[key](source, value);
				if (path) {
					return path;
				}
			}
		}

		return null;
	}

	static get require() {
		return Object.keys(resolvers)
			.reduce((memo, key) => {
				memo['_' + key] = `^^?${key}`;
				return memo;
			}, {});
	}
}