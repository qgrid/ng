require('./index.scss');

import ReferenceEdit from './templates/body.cell.reference.edit';
import BoolEdit from './templates/body.cell.bool.edit';
import ArrayEdit from './templates/body.cell.array.edit';
import RowOptions from './templates/body.cell.row.options.edit';

export default angular
	.module('qgrid.theme.material', ['qgrid'])
	.controller('Body.Cell.Reference.Edit.Controller', ReferenceEdit)
	.controller('Body.Cell.Bool.Edit.Controller', BoolEdit)
	.controller('Body.Cell.Array.Edit.Controller', ArrayEdit)
	.controller('Body.Cell.Row.Options.Controller', RowOptions)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {

	const EMPTY = '';
	const cell = (pos, type) => `qgrid.${pos}.cell.${type}.tpl.html`;
	const plugin = (type) => `qgrid.plugin.${type}.tpl.html`;
	const component = (type) => `qgrid.${type}.tpl.html`;
	const form = (type) => `qgrid.form.cell.${type}.tpl.html`;

	qgridThemeProvider.register('material', theme => {
		theme.put(component('toolbar.top'), require('./templates/toolbar.top.html'));
		theme.put(component('toolbar.bottom'), require('./templates/toolbar.bottom.html'));
		theme.put(component('toolbar.right'), EMPTY);
		theme.put(component('toolbar.left'), EMPTY);

		theme.put(plugin('progress'), require('./templates/plugin.progress.html'));
		theme.put(plugin('export'), require('./templates/plugin.export.html'));
		theme.put(plugin('import'), require('./templates/plugin.import.html'));
		theme.put(plugin('column-chooser'), require('./templates/plugin.column.chooser.html'));
		theme.put(plugin('column-filter'), require('./templates/plugin.column.filter.html'));
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
		theme.put(plugin('persistence-panel'), require('./templates/plugin.persistence.panel.html'));
		theme.put(plugin('visibility'), require('./templates/plugin.visibility.html'));
		theme.put(plugin('title'), require('./templates/plugin.title.html'));
		theme.put(plugin('cell-editor'), require('./templates/plugin.cell.editor.html'));
		theme.put(plugin('column-sort'), require('./templates/plugin.column.sort.html'));
		theme.put(plugin('backdrop'), require('./templates/plugin.backdrop.html'));
		theme.put(plugin('tab-trap'), require('./templates/plugin.tab.trap.html'));
		theme.put(plugin('legend-core'), require('./templates/plugin.legend.core.html'));
		theme.put(plugin('validator'), require('./templates/plugin.validator.html'));

		theme.put(plugin('expression-builder'), require('./templates/plugin.expression.builder.html'));
		theme.put(plugin('expression-builder.autocomplete'), require('./templates/plugin.expression.builder.autocomplete.html'));
		theme.put(plugin('expression-builder.button'), require('./templates/plugin.expression.builder.button.html'));
		theme.put(plugin('expression-builder.label'), require('./templates/plugin.expression.builder.label.html'));
		theme.put(plugin('expression-builder.multiselect'), require('./templates/plugin.expression.builder.multiselect.html'));
		theme.put(plugin('expression-builder.icon.button'), require('./templates/plugin.expression.builder.icon.button.html'));
		theme.put(plugin('expression-builder.input'), require('./templates/plugin.expression.builder.input.html'));
		theme.put(plugin('expression-builder.select'), require('./templates/plugin.expression.builder.select.html'));

		theme.put(cell('head', 'filter-row'), require('./templates/head.cell.filter.row.html'));

		theme.put(cell('head', 'text'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'text'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'text'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'text.edit'), require('./templates/body.cell.text.edit.html'));
		theme.put(cell('body', 'text-area.edit'), require('./templates/body.cell.text.area.edit.html'));

		theme.put(cell('head', 'number'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'number'), require('./templates/body.cell.number.html'));
		theme.put(cell('foot', 'number'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'number.edit'), require('./templates/body.cell.number.edit.html'));

		theme.put(cell('head', 'bool'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'bool'), require('./templates/body.cell.bool.html'));
		theme.put(cell('foot', 'bool'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'bool.edit'), require('./templates/body.cell.bool.edit.html'));

		theme.put(cell('head', 'date'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'date'), require('./templates/body.cell.date.html'));
		theme.put(cell('foot', 'date'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'date.edit'), require('./templates/body.cell.date.edit.html'));

		theme.put(cell('head', 'password'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'password'), require('./templates/body.cell.password.html'));
		theme.put(cell('foot', 'password'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'password.edit'), require('./templates/body.cell.password.edit.html'));

		theme.put(cell('head', 'array'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'array'), require('./templates/body.cell.array.html'));
		theme.put(cell('foot', 'array'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'array.edit'), require('./templates/body.cell.array.edit.html'));

		theme.put(cell('head', 'email'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'email'), require('./templates/body.cell.email.html'));
		theme.put(cell('foot', 'email'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'email.edit'), require('./templates/body.cell.email.edit.html'));

		theme.put(cell('head', 'select'), require('./templates/head.cell.select.html'));
		theme.put(cell('body', 'select'), require('./templates/body.cell.select.html'));
		theme.put(cell('foot', 'select'), require('./templates/foot.cell.text.html'));

		theme.put(cell('head', 'group'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'group'), require('./templates/body.cell.group.html'));
		theme.put(cell('foot', 'group'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'group.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('head', 'pivot'), require('./templates/head.cell.pivot.html'));
		theme.put(cell('body', 'pivot'), require('./templates/body.cell.pivot.html'));
		theme.put(cell('foot', 'pivot'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'pivot.edit'), EMPTY);

		theme.put(cell('head', 'row-number'), require('./templates/head.cell.row.number.html'));
		theme.put(cell('body', 'row-number'), require('./templates/body.cell.row.number.html'));
		theme.put(cell('foot', 'row-number'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-number.edit'), EMPTY);

		theme.put(cell('head', 'row-indicator'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-indicator'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'row-indicator'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-indicator.edit'), EMPTY);

		theme.put(cell('head', 'row-options'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-options'), require('./templates/body.cell.row.options.html'));
		theme.put(cell('foot', 'row-options'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-options.edit'), require('./templates/body.cell.row.options.edit.html'));

		theme.put(cell('head', 'row-expand'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-expand'), require('./templates/body.cell.row.expand.html'));
		theme.put(cell('foot', 'row-expand'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-expand.edit'), EMPTY);

		theme.put(cell('head', 'row-details'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'row-details'), require('./templates/body.cell.row.details.html'));
		theme.put(cell('foot', 'row-details'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'row-details.edit'), EMPTY);

		theme.put(cell('head', 'pad'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'pad'), EMPTY);
		theme.put(cell('foot', 'pad'), EMPTY);
		theme.put(cell('body', 'pad.edit'), EMPTY);

		theme.put(cell('head', 'time'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'time'), require('./templates/body.cell.time.html'));
		theme.put(cell('foot', 'time'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'time.edit'), require('./templates/body.cell.time.edit.html'));

		theme.put(cell('head', 'url'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'url'), require('./templates/body.cell.url.html'));
		theme.put(cell('foot', 'url'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'url.edit'), require('./templates/body.cell.url.edit.html'));

		theme.put(cell('head', 'file'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'file'), require('./templates/body.cell.file.html'));
		theme.put(cell('foot', 'file'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'file.edit'), require('./templates/body.cell.file.edit.html'));

		theme.put(cell('head', 'image'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'image'), require('./templates/body.cell.image.html'));
		theme.put(cell('foot', 'image'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'image.edit'), require('./templates/body.cell.file.edit.html'));

		theme.put(cell('head', 'reference'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'reference'), require('./templates/body.cell.reference.html'));
		theme.put(cell('foot', 'reference'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'reference.edit'), require('./templates/body.cell.reference.edit.html'));

		theme.put(cell('head', 'currency'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'currency'), require('./templates/body.cell.currency.html'));
		theme.put(cell('foot', 'currency'), require('./templates/foot.cell.currency.html'));
		theme.put(cell('body', 'currency.edit'), require('./templates/body.cell.currency.edit.html'));

		theme.put(cell('head', 'id'), require('./templates/head.cell.text.html'));
		theme.put(cell('body', 'id'), require('./templates/body.cell.text.html'));
		theme.put(cell('foot', 'id'), require('./templates/foot.cell.text.html'));
		theme.put(cell('body', 'id.edit'), require('./templates/body.cell.text.edit.html'));

		theme.put(cell('body', 'autocomplete.edit'), require('./templates/body.cell.autocomplete.edit.html'));
		theme.put(cell('body', 'dropdown.edit'), require('./templates/body.cell.dropdown.edit.html'));

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