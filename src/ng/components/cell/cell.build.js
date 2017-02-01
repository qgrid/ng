import TemplatePath from 'core/template/template.path';

export default function (template) {
	return function (source, model, column) {
		const type = column.type || 'text';
		const key = `${type}-cell`;
		const pathSource = {[TemplatePath.name(key)]: column, 'for': source};
		const path = TemplatePath.get(pathSource);
		const state = model[path.model]();
		const link = template.link(
			`qgrid.${source}.${type}.cell.tpl.html`,
			state.resource,
			path.resource
		);

		return (element, scope) => link(element, scope, key);
	};
}
