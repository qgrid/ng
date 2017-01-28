import TemplatePath from './components/template/template.path';
import * as def from '../definition';

TemplatePath
	.register(def.COLUMN_NAME, (template, column) => {
		return {
			model: template.for,
			resource: column.key
		};
	})
	.register(def.TOOLBAR_NAME, template => {
		return {
			model: 'toolbar',
			resource: template.for
		};
	})
	.register(def.PAGER_NAME, () => {
		return {
			model: 'pagination',
			resource: 'content'
		};
	})
	.register(def.GROUPBAR_NAME, () => {
		return {
			model: 'group',
			resource: 'content'
		};
	})
	.register(def.PIVOTBAR_NAME, () => {
		return {
			model: 'pivot',
			resource: 'content'
		};
	})
	.register(def.NODE_NAME, () => {
		return {
			model: 'node',
			resource: 'content'
		};
	});


Setup.$inject = ['$templateCache'];
export default function Setup($templateCache) {
	$templateCache.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.view.tpl.html', require('./components/grid/view.html'));
	$templateCache.put('qgrid.head.cell.tpl.html', require('./components/head/head.cell.html'));
	$templateCache.put('qgrid.head.row.tpl.html', require('./components/head/head.row.html'));
	$templateCache.put('qgrid.head.group.tpl.html', require('./components/head/head.group.html'));
	$templateCache.put('qgrid.head.pivot.tpl.html', require('./components/head/head.pivot.html'));
	$templateCache.put('qgrid.body.cell.tpl.html', require('./components/body/body.cell.html'));
	$templateCache.put('qgrid.body.row.tpl.html', require('./components/body/body.row.html'));
	$templateCache.put('qgrid.body.group.tpl.html', require('./components/body/body.group.html'));
	$templateCache.put('qgrid.body.pivot.tpl.html', require('./components/body/body.pivot.html'));
	$templateCache.put('qgrid.foot.cell.tpl.html', require('./components/foot/foot.cell.html'));
	$templateCache.put('qgrid.foot.row.tpl.html', require('./components/foot/foot.row.html'));
	$templateCache.put('qgrid.foot.group.tpl.html', require('./components/foot/foot.group.html'));
	$templateCache.put('qgrid.foot.pivot.tpl.html', require('./components/foot/foot.pivot.html'));
	$templateCache.put('qgrid.node.cell.tpl.html', require('./components/node/node.cell.html'));
	$templateCache.put('qgrid.toolbar.top.tpl.html', require('./components/toolbar/toolbar.top.html'));
	$templateCache.put('qgrid.toolbar.bottom.tpl.html', require('./components/toolbar/toolbar.bottom.html'));
	$templateCache.put('qgrid.pager.tpl.html', require('./plugins/pagination/pager.html'));
	$templateCache.put('qgrid.groupbar.tpl.html', require('./plugins/groupbar/groupbar.html'));
	$templateCache.put('qgrid.pivotbar.tpl.html', require('./plugins/pivotbar/pivotbar.html'));
}