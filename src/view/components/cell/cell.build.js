import TemplatePath from '@grid/core/template/template.path';
import AppError from '@grid/core/infrastructure/error';
import {noop} from '@grid/core/services/utility';

function canBuild(column) {
	return column.type !== 'pad';
}

function getKey(column) {
	return column.origin === 'custom' ? 'custom-cell' : `${column.type}-cell`;
}

function buildView(source, mode, column) {
	switch (mode) {
		case 'view': {
			const type = column.type;
			return {
				key: getKey(column),
				url: `qgrid.${source}.cell.${type}.tpl.html`,
				defaults: [`$default.${type}`, '$default']
			};
		}
		case 'edit': {
			const type = column.editor || column.type;

			return {
				key: `${getKey(column)}-${mode}`,
				url: `qgrid.${source}.cell.${type}.${mode}.tpl.html`,
				defaults: column.editor
					? [`$default.${column.editor}`, `$default.${type}`, '$default']
					: [`$default.${type}`, '$default']
			};
		}
		default:
			throw new AppError('cell.build', `Invalid mode "${mode}"`);
	}
}

export default function (template, mode = 'view') {
	return function (source, model, column) {
		if (!canBuild(column)) {
			return noop;
		}

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