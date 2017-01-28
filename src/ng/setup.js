import TemplatePath from './components/template/template.path';
import * as def from '../definition';

TemplatePath
	.register(def.COLUMN_NAME, (template, column) => {
		return {
			name: template.for,
			key: column.key
		};
	})
	.register(def.TOOLBAR_NAME, template => {
		return {
			name: 'toolbar',
			key: template.for
		};
	})
	.register(def.PAGER_NAME, () => {
		return {
			name: 'pagination',
			key: 'content'
		};
	})
	.register(def.GROUPBAR_NAME, () => {
		return {
			name: 'group',
			key: 'key'
		};
	})
	.register(def.SELECTION_NAME, source => {
		return {
			name: 'selection',
			key: source.for
		};
	});


Setup.$inject = ['$templateCache'];
export default function Setup($templateCache) {
	$templateCache.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.view.tpl.html', require('./components/grid/view.html'));
	$templateCache.put('qgrid.head.cell.tpl.html', require('./components/head/cell.html'));
	$templateCache.put('qgrid.body.cell.tpl.html', require('./components/body/cell.html'));
	$templateCache.put('qgrid.foot.cell.tpl.html', require('./components/foot/cell.html'));
	$templateCache.put('qgrid.toolbar.top.tpl.html', require('./components/toolbar/toolbar.top.html'));
	$templateCache.put('qgrid.toolbar.bottom.tpl.html', require('./components/toolbar/toolbar.bottom.html'));
	$templateCache.put('qgrid.pager.tpl.html', require('./plugins/pagination/pager.html'));
	$templateCache.put('qgrid.groupbar.tpl.html', require('./plugins/groupbar/groupbar.html'));
	$templateCache.put('qgrid.check.select-all.tpl.html', require('./components/selection/check.select-all.html'));
	$templateCache.put('qgrid.check.select.tpl.html', require('./components/selection/check.select.html'));
}