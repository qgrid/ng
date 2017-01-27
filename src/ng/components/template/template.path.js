import {TEMPLATE_NAME} from '../../../definition';

export default class TemplatePath {
	constructor() {
		this.resolvers = [];
	}

	register(resolver) {
		this.resolvers.push(resolver);
		return this;
	}

	get(source) {
		const path = this.find(source);
		if(!path) {
			throw new Error(
				'template.path',
				`Template path, required by directive "${TEMPLATE_NAME}" can't be found`);
		}

		return path;
	}

	find(source) {
		for (let resolve of this.resolvers) {
			const path = resolve(source);
			if (path) {
				return path;
			}
		}

		return null;
	}
}