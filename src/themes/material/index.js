import angular from 'angular';
require('./index.scss');

export default angular
	.module('qgrid.theme.material', [])
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.body.text.cell.edit.tpl.html', require('themes/material/templates/body.text.cell.edit.html'));
	$templateCache.put('qgrid.body.text-area.cell.edit.tpl.html', require('themes/material/templates/body.text.area.cell.edit.html'));
	$templateCache.put('qgrid.body.bool.cell.edit.tpl.html', require('themes/material/templates/body.bool.cell.edit.html'));
	$templateCache.put('qgrid.body.date.cell.edit.tpl.html', require('themes/material/templates/body.date.cell.edit.html'));
	$templateCache.put('qgrid.body.number.cell.edit.tpl.html', require('themes/material/templates/body.number.cell.edit.html'));
	$templateCache.put('qgrid.body.array.cell.edit.tpl.html', require('themes/material/templates/body.array.cell.edit.html'));
}