import TemplatePath from 'core/template/template.path';
import AppError from 'core/infrastructure/error';

function buildView(source, mode, column) {
	switch (mode) {
		case 'view': {
			const type = column.type || 'text';
			return {
				key: `${type}-cell`,
				url: `qgrid.${source}.cell.${type}.tpl.html`,
				defaults: [`$default.${type}`, '$default']
			};
		}
		case 'edit': {
			const type = column.editor || column.type || 'text';

			return {
				key: `${type}-cell-${mode}`,
				url: `qgrid.${source}.cell.${type}.${mode}.tpl.html`,
				defaults: column.editor
					? [`$default.${column.editor}`, `$default.${column.type}`, '$default']
					: [`$default.${type}`, '$default']
			};
		}
		default:
			throw new AppError('cell.build', `Invalid key "${mode}"`);
	}
}

export default function (template, mode = 'view') {
	return function (source, model, column) {
		const view = buildView(source, mode, column);
		const pathSource = {[TemplatePath.name(view.key)]: column, 'for': source};
		const path = TemplatePath.get(pathSource);
		const state = model[path.model]();

		const link = template.link(
			view.url,
			state.resource,
			[path.resource]
				.concat(view.defaults)
		);

		return (element, scope) => link(element, scope);
	};
}