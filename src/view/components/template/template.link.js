import {AppError} from '@grid/core/infrastructure';

export default class TemplateLink {
	constructor($compile, $templateCache) {
		this.$compile = $compile;
		this.$templateCache = $templateCache;
	}

	link(templateUrl, resource, keys = ['content', '$default']) {
		const resourceData = resource.data;
		const resourceScope = resource.scope;
		const resourceKey = this.findResourceKey(resourceData, keys);
		const template = resourceKey !== null
			? resourceData[resourceKey]
			: this.$templateCache.get(templateUrl);

		return (element, scope, container = element) => {
			if (resourceScope.hasOwnProperty(resourceKey)) {
				const env = resourceScope[resourceKey];
				for (let name of Object.keys(env)) {
					if (scope.hasOwnProperty(name)) {
						throw new AppError(
							'template.core',
							`"${name}" is reserved, use another name`
						);
					}

					scope[name] = env[name];
				}
			}

			container.html('<!--qgrid: template-->' + template);
			const linkTo = this.$compile(element.contents());
			linkTo(scope);
		};
	}

	findResourceKey(resourceData, keys) {
		for (let key of keys) {
			if (resourceData.hasOwnProperty(key)) {
				return key;
			}
		}

		return null;
	}
}