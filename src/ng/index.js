import angular from 'angular';
import Grid from './components/grid/grid';
import GridService from './services/grid';

import TemplatePath from 'core/template/template.path';
import Head from './components/head/head';
import Foot from './components/foot/foot';
import ColumnList from './components/column/column.list';
import Column from './components/column/column';
import Node from './components/node/node';
import Toolbar from './components/toolbar/toolbar';
import Selection from './components/selection/selection';
import Drag from './components/dnd/drag';
import Drop from './components/dnd/drop';

import Pager from './plugins/pagination/pager';
import Sortbar from './plugins/sortbar/sortbar';
import Groupbar from './plugins/groupbar/groupbar';
import Pivotbar from './plugins/pivotbar/pivotbar';

import ViewCore from './components/view/view.core';
import ViewportCore from './components/grid/viewport.core';
import TableCore from './components/grid/table.core';
import TdCore from './components/body/td.core';
import ThCore from './components/head/th.core';
import TfCore from './components/foot/tf.core';
import HeadCore from './components/head/head.core';
import BodyCore from './components/body/body.core';
import FootCore from './components/foot/foot.core';
import SortCore from './components/sort/sort.core';
import StickyCore from './components/sticky/sticky.core';
import ToolbarCore from './components/toolbar/toolbar.core';
import SelectionCore from './components/selection/selection.core';
import Indeterminate from './components/selection/indeterminate';

import Theme from './services/theme';
import Range from './filters/range';

import * as def from '../definition';

// For now should be the last in import list cause use TemplatePath.require
// that should be filled before importing this
// TODO: get rid of static require
import Template from './components/template/tempate';

export default angular
	.module(def.MODULE_NAME, [])
	.component(def.GRID_NAME, Grid)
	.component(def.VIEW_CORE_NAME, ViewCore)
	.component(def.HEAD_NAME, Head)
	.component(def.FOOT_NAME, Foot)
	.component(def.TEMPLATE_NAME, Template)
	.component(def.COLUMN_LIST_NAME, ColumnList)
	.component(def.COLUMN_NAME, Column)
	.component(def.NODE_NAME, Node)
	.component(def.TOOLBAR_NAME, Toolbar)
	.component(def.TOOLBAR_CORE_NAME, ToolbarCore)
	.component(def.PAGER_NAME, Pager)
	.component(def.SORTBAR_NAME, Sortbar)
	.component(def.GROUPBAR_NAME, Groupbar)
	.component(def.SELECTION_NAME, Selection)
	.component(def.PIVOTBAR_NAME, Pivotbar)
	.directive(def.DRAG_NAME, () => Drag)
	.directive(def.DROP_NAME, () => Drop)
	.directive(def.VIEWPORT_CORE_NAME, () => ViewportCore)
	.directive(def.TABLE_CORE_NAME, () => TableCore)
	.directive(def.SELECTION_CORE_NAME, () => SelectionCore)
	.directive(def.TD_CORE_NAME, () => TdCore)
	.directive(def.TH_CORE_NAME, () => ThCore)
	.directive(def.TF_CORE_NAME, () => TfCore)
	.directive(def.HEAD_CORE_NAME, () => HeadCore)
	.directive(def.BODY_CORE_NAME, () => BodyCore)
	.directive(def.FOOT_CORE_NAME, () => FootCore)
	.directive(def.SORT_CORE_NAME, () => SortCore)
	.directive(def.STICKY_CORE_NAME, () => StickyCore)
	.directive(def.INDETERMINATE_NAME, () => Indeterminate)
	.service(def.SERVICE_NAME, () => new GridService())
	.service(def.THEME_NAME, () => new Theme())
	.service(def.TEMPLATE_PATH_NAME, () => () => TemplatePath)
	.filter(def.RANGE_NAME, () => Range)
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	const EMPTY = '';

	$templateCache.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.view.tpl.html', require('./components/view/view.html'));
	$templateCache.put('qgrid.head.tpl.html', require('./components/head/head.html'));
	$templateCache.put('qgrid.body.tpl.html', require('./components/body/body.html'));
	$templateCache.put('qgrid.foot.tpl.html', require('./components/foot/foot.html'));
	$templateCache.put('qgrid.toolbar.top.tpl.html', require('./components/toolbar/toolbar.top.html'));
	$templateCache.put('qgrid.toolbar.bottom.tpl.html', require('./components/toolbar/toolbar.bottom.html'));

	$templateCache.put('qgrid.head.pivot.cell.tpl.html', require('./components/pivot/head.pivot.cell.html'));
	$templateCache.put('qgrid.body.pivot.cell.tpl.html', require('./components/pivot/body.pivot.cell.html'));
	$templateCache.put('qgrid.foot.pivot.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.group.cell.tpl.html', require('./components/node/head.group.cell.html'));
	$templateCache.put('qgrid.body.group.cell.tpl.html', require('./components/node/body.group.cell.html'));
	$templateCache.put('qgrid.foot.group.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.text.cell.tpl.html', require('./components/head/head.text.cell.html'));
	$templateCache.put('qgrid.body.text.cell.tpl.html', require('./components/body/body.text.cell.html'));
	$templateCache.put('qgrid.foot.text.cell.tpl.html', require('./components/foot/foot.text.cell.html'));

	$templateCache.put('qgrid.head.select.cell.tpl.html', require('./components/selection/head.select.cell.html'));
	$templateCache.put('qgrid.body.select.cell.tpl.html', require('./components/selection/body.select.cell.html'));
	$templateCache.put('qgrid.foot.select.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.plugins.pager.tpl.html', require('./plugins/pagination/pager.html'));
	$templateCache.put('qgrid.plugins.sortbar.tpl.html', require('./plugins/sortbar/sortbar.html'));
	$templateCache.put('qgrid.plugins.groupbar.tpl.html', require('./plugins/groupbar/groupbar.html'));
	$templateCache.put('qgrid.plugins.pivotbar.tpl.html', require('./plugins/pivotbar/pivotbar.html'));
}