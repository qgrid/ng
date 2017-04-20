require('./index.scss');
import ReferenceEdit from './templates/body.cell.reference.edit';

export default angular
	.module('qgrid.theme.material', ['qgrid'])
	.controller('Body.Cell.Reference.Edit.Controller', ReferenceEdit)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	qgridThemeProvider.register('material', theme => {
		theme.put('qgrid.plugin.progress.tpl.html', require('themes/material/templates/plugin.progress.html'));

		theme.put('qgrid.body.cell.text.edit.tpl.html', require('themes/material/templates/body.cell.text.edit.html'));
		theme.put('qgrid.body.cell.text-area.edit.tpl.html', require('themes/material/templates/body.cell.text.area.edit.html'));
		theme.put('qgrid.body.cell.bool.edit.tpl.html', require('themes/material/templates/body.cell.bool.edit.html'));
		theme.put('qgrid.body.cell.date.edit.tpl.html', require('themes/material/templates/body.cell.date.edit.html'));
		theme.put('qgrid.body.cell.number.edit.tpl.html', require('themes/material/templates/body.cell.number.edit.html'));
		theme.put('qgrid.body.cell.array.tpl.html', require('themes/material/templates/body.cell.array.html'));
		theme.put('qgrid.body.cell.array.edit.tpl.html', require('themes/material/templates/body.cell.array.edit.html'));
		theme.put('qgrid.body.cell.password.edit.tpl.html', require('themes/material/templates/body.cell.password.edit.html'));
		theme.put('qgrid.body.cell.bool.tpl.html', require('themes/material/templates/body.cell.bool.html'));
		theme.put('qgrid.body.cell.select.tpl.html', require('themes/material/templates/body.cell.select.html'));
		theme.put('qgrid.body.cell.row-indicator.tpl.html', require('themes/material/templates/body.cell.row.indicator.html'));
		theme.put('qgrid.body.cell.url.tpl.html', require('themes/material/templates/body.cell.url.html'));
		theme.put('qgrid.body.cell.url.edit.tpl.html', require('themes/material/templates/body.cell.url.edit.html'));
		theme.put('qgrid.body.cell.email.tpl.html', require('themes/material/templates/body.cell.email.html'));
		theme.put('qgrid.body.cell.email.edit.tpl.html', require('themes/material/templates/body.cell.email.edit.html'));
		theme.put('qgrid.body.cell.file.tpl.html', require('themes/material/templates/body.cell.file.html'));
		theme.put('qgrid.body.cell.file.edit.tpl.html', require('themes/material/templates/body.cell.file.edit.html'));
		theme.put('qgrid.body.cell.image.tpl.html', require('themes/material/templates/body.cell.image.html'));
		theme.put('qgrid.body.cell.image.edit.tpl.html', require('themes/material/templates/body.cell.file.edit.html'));
		theme.put('qgrid.body.cell.reference.tpl.html', require('themes/material/templates/body.cell.reference.html'));
		theme.put('qgrid.body.cell.reference.edit.tpl.html', require('themes/material/templates/body.cell.reference.edit.html'));
		theme.put('qgrid.body.cell.dropdown.edit.tpl.html', require('themes/material/templates/body.cell.dropdown.edit.html'));
		theme.put('qgrid.body.cell.autocomplete.edit.tpl.html', require('themes/material/templates/body.cell.autocomplete.edit.html'));

		theme.put('qgrid.head.cell.text.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.bool.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.date.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.number.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.array.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.email.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.password.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.time.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.url.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.file.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.image.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.reference.tpl.html', require('themes/material/templates/head.cell.text.html'));
		theme.put('qgrid.head.cell.pivot.tpl.html', require('themes/material/templates/head.cell.pivot.html'));
		theme.put('qgrid.head.cell.select.tpl.html', require('themes/material/templates/head.cell.select.html'));

		theme.put('qgrid.form.cell.text.edit.tpl.html', require('themes/material/templates/form.cell.text.edit.html'));
		theme.put('qgrid.form.cell.number.edit.tpl.html', require('themes/material/templates/form.cell.number.edit.html'));
		theme.put('qgrid.form.cell.date.edit.tpl.html', require('themes/material/templates/form.cell.date.edit.html'));
		theme.put('qgrid.form.cell.bool.edit.tpl.html', require('themes/material/templates/form.cell.bool.edit.html'));
		theme.put('qgrid.form.cell.reference.edit.tpl.html', require('themes/material/templates/form.cell.reference.edit.html'));

		theme.put('qgrid.toolbar.top.tpl.html', require('themes/material/templates/toolbar.top.html'));
		theme.put('qgrid.plugin.column-chooser.tpl.html', require('themes/material/templates/plugin.column.chooser.html'));
		theme.put('qgrid.plugin.column-filter-panel.tpl.html', require('themes/material/templates/plugin.column.filter.panel.html'));
		theme.put('qgrid.plugin.edit-form-panel.tpl.html', require('themes/material/templates/plugin.edit.form.panel.html'));
		theme.put('qgrid.plugin.popup-panel.tpl.html', require('themes/material/templates/plugin.popup.panel.html'));
		theme.put('qgrid.plugin.group-bar.tpl.html', require('themes/material/templates/plugin.group.bar.html'));
		theme.put('qgrid.plugin.sort-bar.tpl.html', require('themes/material/templates/plugin.sort.bar.html'));
		theme.put('qgrid.plugin.pivot-bar.tpl.html', require('themes/material/templates/plugin.pivot.bar.html'));
		theme.put('qgrid.plugin.selection-bar.tpl.html', require('themes/material/templates/plugin.selection.bar.html'));
		theme.put('qgrid.plugin.pager.tpl.html', require('themes/material/templates/plugin.pager.html'));
	});
}