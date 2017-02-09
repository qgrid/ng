import angular from 'angular';
require('./index.scss');

export default angular
	.module('qgrid.theme.material', [])
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.plugin.progress.tpl.html', require('themes/material/templates/plugin.progress.html'));

	$templateCache.put('qgrid.body.cell.text.edit.tpl.html', require('themes/material/templates/body.cell.text.edit.html'));
	$templateCache.put('qgrid.body.cell.text-area.edit.tpl.html', require('themes/material/templates/body.cell.text.area.edit.html'));
	$templateCache.put('qgrid.body.cell.bool.edit.tpl.html', require('themes/material/templates/body.cell.bool.edit.html'));
	$templateCache.put('qgrid.body.cell.date.edit.tpl.html', require('themes/material/templates/body.cell.date.edit.html'));
	$templateCache.put('qgrid.body.cell.number.edit.tpl.html', require('themes/material/templates/body.cell.number.edit.html'));
	$templateCache.put('qgrid.body.cell.array.edit.tpl.html', require('themes/material/templates/body.cell.array.edit.html'));
	$templateCache.put('qgrid.body.cell.password.edit.tpl.html', require('themes/material/templates/body.cell.password.edit.html'));
	$templateCache.put('qgrid.body.cell.bool.tpl.html', require('themes/material/templates/body.cell.bool.html'));

	$templateCache.put('qgrid.head.cell.text.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.bool.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.date.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.number.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.array.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.email.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.password.tpl.html', require('themes/material/templates/head.cell.text.html'));
	$templateCache.put('qgrid.head.cell.pivot.tpl.html', require('themes/material/templates/head.cell.pivot.html'));

	$templateCache.put('qgrid.toolbar.top.tpl.html', require('themes/material/templates/toolbar.top.html'));
}