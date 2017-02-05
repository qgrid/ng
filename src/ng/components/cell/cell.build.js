import TemplatePath from 'core/template/template.path';

export default function (template, mode = 'view') {
	return function (source, model, column) {
		const type = column.type || 'text';
		const key = mode === 'view'
			? `${type}-cell`
			: `${type}-cell-${mode}`;

		const pathSource = {[TemplatePath.name(key)]: column, 'for': source};
		const path = TemplatePath.get(pathSource);
		const state = model[path.model]();

		const templateUrl = mode === 'view'
			? `qgrid.${source}.${type}.cell.tpl.html`
			: `qgrid.${source}.${type}.cell.${mode}.tpl.html`;

		const link = template.link(
			templateUrl,
			state.resource,
			path.resource
		);

		return (element, scope) => link(element, scope);
	};
}