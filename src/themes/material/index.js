require('./index.scss');

import ReferenceEdit from './templates/body.cell.reference.edit';
import DateEdit from './templates/body.cell.date.edit';
import BoolEdit from './templates/body.cell.bool.edit';
import RowOptions from './templates/body.cell.row.options.edit';

export default angular
	.module('qgrid.theme.material', ['qgrid'])
	.controller('Body.Cell.Reference.Edit.Controller', ReferenceEdit)
	.controller('Body.Cell.Date.Edit.Controller', DateEdit)
	.controller('Body.Cell.Bool.Edit.Controller', BoolEdit)
	.controller('Body.Cell.Row.Options.Controller', RowOptions)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {

	const cell = (pos, type) => `{qgrid.${pos}.cell.${type}.tpl.html`;
	const plugin = (type) => `{qgrid.plugin.${type}.tpl.html`;
	const component = (type) => `{qgrid.${type}.tpl.html`;
	const form = (type) => `{qgrid.form.cell.${type}.tpl.html`;

	qgridThemeProvider.register('material', theme => {
		theme.put(component('toolbar'), require('./templates/toolbar.top.html'));

		theme.put(plugin('progress'), require('./templates/'));
		theme.put(plugin('export'), require('./templates/'));
		theme.put(plugin('import'), require('./templates/'));
		theme.put(plugin('column-chooser'), require('./templates/plugin.column.chooser.html'));
		theme.put(plugin('column-filter-panel'), require('./templates/plugin.column.filter.panel.html'));
		theme.put(plugin('edit-form'), require('./templates/plugin.edit.form.html'));
		theme.put(plugin('edit-form-panel'), require('./templates/plugin.edit.form.panel.html'));
		theme.put(plugin('popup-panel'), require('./templates/plugin.popup.panel.html'));
		theme.put(plugin('group-bar'), require('./templates/plugin.group.bar.html'));
		theme.put(plugin('action-bar-core'), require('./templates/plugin.action.bar.core.html'));
		theme.put(plugin('action'), require('./templates/plugin.action.html'));
		theme.put(plugin('sort-bar'), require('./templates/plugin.sort.bar.html'));
		theme.put(plugin('pivot-bar'), require('./templates/plugin.pivot.bar.html'));
		theme.put(plugin('selection-bar'), require('./templates/plugin.selection.bar.html'));
		theme.put(plugin('pager'), require('./templates/plugin.pager.html'));

		theme.put(cell('head', 'text'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'text'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'text'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'text.edit'), require('./templates/body.cell.text.edit.html'));
		theme.put(cell('body', 'text-area.edit'), require('./templates/body.cell.text.area.edit.html'));

		theme.put(cell('head', 'number'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'number'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'number'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'number.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'bool'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'bool'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'bool'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'bool.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'date'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'date'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'date'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'date.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'password'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'password'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'password'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'password.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'array'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'array'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'array'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'array.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'email'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'email'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'email'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'email.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'select'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'select'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'select'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'select.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'group'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'group'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'group'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'group.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'pivot'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'pivot'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'pivot'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'pivot.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'row-number'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-number'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'row-number'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-number.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'row-indicator'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-indicator'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'row-indicator'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-indicator.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'row-options'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-options'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'row-options'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-options.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'row-expand'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-expand'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'row-expand'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-expand.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'row-details'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-details'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'row-details'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-details.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'pad'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'pad'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'pad'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'pad.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'time'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'time'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'time'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'time.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'url'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'url'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'url'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'url.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'file'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'file'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'file'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'file.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'image'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'image'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'image'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'image.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'reference'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'reference'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'reference'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'reference.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'currency'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'currency'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'currency'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'currency.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'id'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'id'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'id'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'id.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(form('text.edit'), require('./templates/form.cell.text.edit.html'));
		theme.put(form('number.edit'), require('./templates/form.cell.number.edit.html'));
		theme.put(form('currency.edit'), require('./templates/form.cell.number.edit.html'));
		theme.put(form('date.edit'), require('./templates/form.cell.date.edit.html'));
		theme.put(form('bool.edit'), require('./templates/form.cell.bool.edit.html'));
		theme.put(form('reference.edit'), require('./templates/form.cell.reference.edit.html'));
		theme.put(form('id.edit'), require('./templates/form.cell.text.edit.html'));
		theme.put(form('url.edit'), require('./templates/form.cell.url.edit.html'));
		theme.put(form('image.edit'), require('./templates/form.cell.file.edit.html'));
		theme.put(form('file.edit'), require('./templates/form.cell.file.edit.html'));
		theme.put(form('text-area.edit'), require('./templates/form.cell.text.area.edit.html'));
		theme.put(form('password.edit'), require('./templates/form.cell.password.edit.html'));
		theme.put(form('array.edit'), require('./templates/form.cell.array.edit.html'));
		theme.put(form('email.edit'), require('./templates/form.cell.email.edit.html'));
		theme.put(form('time.edit'), require('./templates/form.cell.time.edit.html'));

	});
}