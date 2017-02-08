import angular from 'angular';
require('./index.scss');

export default angular
	.module('qgrid.theme.material', [])
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.plugin.progress.tpl.html', require('themes/material/templates/plugin.progress.html'));

	$templateCache.put('qgrid.body.text.cell.edit.tpl.html', require('themes/material/templates/body.text.cell.edit.html'));
	$templateCache.put('qgrid.body.text-area.cell.edit.tpl.html', require('themes/material/templates/body.text.area.cell.edit.html'));
	$templateCache.put('qgrid.body.bool.cell.edit.tpl.html', require('themes/material/templates/body.bool.cell.edit.html'));
	$templateCache.put('qgrid.body.date.cell.edit.tpl.html', require('themes/material/templates/body.date.cell.edit.html'));
	$templateCache.put('qgrid.body.number.cell.edit.tpl.html', require('themes/material/templates/body.number.cell.edit.html'));
	$templateCache.put('qgrid.body.array.cell.edit.tpl.html', require('themes/material/templates/body.array.cell.edit.html'));
	$templateCache.put('qgrid.body.password.cell.edit.tpl.html', require('themes/material/templates/body.password.cell.edit.html'));

	$templateCache.put('qgrid.body.bool.cell.tpl.html', require('themes/material/templates/body.bool.cell.html'));

	$templateCache.put('qgrid.head.text.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.bool.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.date.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.number.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.array.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.email.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.password.cell.tpl.html', require('themes/material/templates/head.text.cell.html'));
	$templateCache.put('qgrid.head.pivot.cell.tpl.html', require('themes/material/templates/head.pivot.cell.html'));

	$templateCache.put('qgrid.toolbar.top.tpl.html', require('themes/material/templates/toolbar.top.html'));
}