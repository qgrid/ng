import AppError from 'core/infrastructure/error';

export default class TemplateLink {
	constructor($compile, $templateCache) {
		this.$compile = $compile;
		this.$templateCache = $templateCache;
	}

	link(templateUrl, resource, keys = ['content', '$default']) {
		const resourceData = resource.data;
		const resourceKey = this.findResourceKey(resourceData, keys);
		const template = resourceKey !== null
			? resourceData[resourceKey]
			: this.$templateCache.get(templateUrl);

		return (element, scope) => {
			const resourceScope = resource.scope;
			for (let name of Object.keys(resourceScope)) {
				if (scope.hasOwnProperty(name)) {
					throw new AppError(
						'template.core',
						`"${name}" is reserved, use another name`
					);
				}

				scope[name] = resourceScope[name];
			}

			element.html('<!--qgrid: template-->' + template);
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