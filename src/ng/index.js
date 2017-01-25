import angular from 'angular';
import Model from '../core/infrastructure/model';
import Grid from './components/grid/grid';

import Template from './components/template/tempate';
import Head from './components/head/head';
import ColumnList from './components/column/column.list';
import Column from './components/column/column';
import Toolbar from './components/toolbar/toolbar';

import ViewCore from './components/grid/view.core';
import ViewportCore from './components/grid/viewport.core';
import TdCore from './components/body/td.core';
import ThCore from './components/head/th.core';
import TfCore from './components/foot/tf.core';
import HeadCore from './components/head/head.core';
import BodyCore from './components/body/body.core';
import FootCore from './components/foot/foot.core';
import StickyCore from './components/sticky/sticky.core';
import ToolbarCore from './components/toolbar/toolbar.core';

import Theme from './services/theme';
import Range from './filters/range';

import * as def from '../definition';

export default angular
	.module(def.MODULE_NAME, [])
	.component(def.GRID_NAME, Grid)
	.component(def.HEAD_NAME, Head)
	.component(def.TEMPLATE_NAME, Template)
	.component(def.COLUMN_LIST_NAME, ColumnList)
	.component(def.COLUMN_NAME, Column)
	.component(def.TOOLBAR_NAME, Toolbar)
	.component(def.VIEW_CORE_NAME, ViewCore)
	.directive(def.VIEWPORT_CORE_NAME, () => ViewportCore)
	.directive(def.TD_CORE_NAME, () => TdCore)
	.directive(def.TH_CORE_NAME, () => ThCore)
	.directive(def.TF_CORE_NAME, () => TfCore)
	.directive(def.HEAD_CORE_NAME, () => HeadCore)
	.directive(def.BODY_CORE_NAME, () => BodyCore)
	.directive(def.FOOT_CORE_NAME, () => FootCore)
	.directive(def.STICKY_CORE_NAME, () => StickyCore)
	.directive(def.TOOLBAR_CORE_NAME, () => ToolbarCore)
	.service(def.SERVICE_NAME, () => () => new Model())
	.service(def.THEME_NAME, () => new Theme())
	.filter(def.RANGE_NAME, () => Range)
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.view.tpl.html', require('./components/grid/view.html'));
	$templateCache.put('qgrid.head.cell.tpl.html', require('./components/head/cell.html'));
	$templateCache.put('qgrid.body.cell.tpl.html', require('./components/body/cell.html'));
	$templateCache.put('qgrid.foot.cell.tpl.html', require('./components/foot/cell.html'));
	$templateCache.put('qgrid.toolbar.top.tpl.html', require('./components/toolbar/toolbar.top.html'));
	$templateCache.put('qgrid.toolbar.bottom.tpl.html', require('./components/toolbar/toolbar.bottom.html'));

}