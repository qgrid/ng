import {TEMPLATE_NAME} from '../../../definition';

export default class TemplatePath {
	constructor() {
		this.visitors = [];
	}

	register(visit) {
		this.visitors.push(visit);
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
		for (let visit of this.visitors) {
			const path = visit(source);
			if (path) {
				return path;
			}
		}

		return null;
	}
}