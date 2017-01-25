import Error from '../../../core/infrastructure/error';

export default class TemplateCore {
	constructor($compile, $templateCache) {
		this.$compile = $compile;
		this.$templateCache = $templateCache;
	}

	link(templateUrl, resource, key) {
		const resourceData = resource.data;
		const template = resourceData.hasOwnProperty(key)
			? resourceData[key]
			: resourceData.hasOwnProperty('$default')
				? resourceData['$default']
				: this.$templateCache.get(templateUrl);

		return (element, scope) => {
			const resourceScope = resource.scope;
			for (let name of Object.keys(resourceScope)) {
				if (scope.hasOwnProperty(name)) {
					throw new Error(
						'template.core',
						`"${name}" is reserved, use another name`
					);
				}

				scope[name] = resourceScope[name];
			}

			const linkTo = this.$compile('<!--qgrid: template-->' + template);
			const content = linkTo(scope);
			element.append(content);
		};
	}
}