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
	.register(def.SORTBAR_NAME, () => {
		return {
			model: 'sort',
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
	})
	.register(def.SELECTION_NAME, template => {
		return {
			model: 'selection',
			resource: template.for
		};
	});


Setup.$inject = ['$templateCache'];
export default function Setup($templateCache) {
	const empty = '';

	$templateCache.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.view.tpl.html', require('./components/view/view.html'));
	$templateCache.put('qgrid.head.tpl.html', require('./components/head/head.html'));
	$templateCache.put('qgrid.body.tpl.html', require('./components/body/body.html'));
	$templateCache.put('qgrid.foot.tpl.html', require('./components/foot/foot.html'));
	$templateCache.put('qgrid.node.cell.tpl.html', require('./components/node/node.cell.html'));
	$templateCache.put('qgrid.toolbar.top.tpl.html', require('./components/toolbar/toolbar.top.html'));
	$templateCache.put('qgrid.toolbar.bottom.tpl.html', require('./components/toolbar/toolbar.bottom.html'));

	$templateCache.put('qgrid.head.text.cell.tpl.html', require('./components/head/head.text.cell.html'));
	$templateCache.put('qgrid.body.text.cell.tpl.html', require('./components/body/body.text.cell.html'));
	$templateCache.put('qgrid.foot.text.cell.tpl.html', require('./components/foot/foot.text.cell.html'));
	$templateCache.put('qgrid.head.select.cell.tpl.html', require('./components/selection/head.select.cell.html'));
	$templateCache.put('qgrid.body.select.cell.tpl.html', require('./components/selection/body.select.cell.html'));
	$templateCache.put('qgrid.foot.select.cell.tpl.html', empty);

	$templateCache.put('qgrid.plugins.pager.tpl.html', require('./plugins/pagination/pager.html'));
	$templateCache.put('qgrid.plugins.sortbar.tpl.html', require('./plugins/sortbar/sortbar.html'));
	$templateCache.put('qgrid.plugins.groupbar.tpl.html', require('./plugins/groupbar/groupbar.html'));
	$templateCache.put('qgrid.plugins.pivotbar.tpl.html', require('./plugins/pivotbar/pivotbar.html'));
}