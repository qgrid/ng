import angular from 'angular';
import Grid from './components/grid/grid';
import GridService from './services/grid';
import Setup from './setup';

import Template from './components/template/tempate';
import TemplatePath from './components/template/template.path';
import Head from './components/head/head';
import Foot from './components/foot/foot';
import ColumnList from './components/column/column.list';
import Column from './components/column/column';
import Node from './components/node/node';
import Toolbar from './components/toolbar/toolbar';

import Pager from './plugins/pagination/pager';
import Groupbar from './plugins/groupbar/groupbar';
import Pivotbar from './plugins/pivotbar/pivotbar';

import ViewCore from './components/view/view.core';
import ViewportCore from './components/grid/viewport.core';
import TableCore from './components/grid/table.core';
import TdCore from './components/body/td.core';
import ThCore from './components/head/th.core';
import TfCore from './components/foot/tf.core';
import NodeCore from './components/node/node.core';
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
	.component(def.GROUPBAR_NAME, Groupbar)
	.component(def.PIVOTBAR_NAME, Pivotbar)
	.directive(def.VIEWPORT_CORE_NAME, () => ViewportCore)
	.directive(def.TABLE_CORE_NAME, () => TableCore)
	.directive(def.TD_CORE_NAME, () => TdCore)
	.directive(def.TH_CORE_NAME, () => ThCore)
	.directive(def.TF_CORE_NAME, () => TfCore)
	.directive(def.NODE_CORE_NAME, () => NodeCore)
	.directive(def.HEAD_CORE_NAME, () => HeadCore)
	.directive(def.BODY_CORE_NAME, () => BodyCore)
	.directive(def.FOOT_CORE_NAME, () => FootCore)
	.directive(def.STICKY_CORE_NAME, () => StickyCore)
	.service(def.SERVICE_NAME, () => new GridService())
	.service(def.THEME_NAME, () => new Theme())
	.service(def.TEMPLATE_PATH_NAME, () => () => TemplatePath)
	.filter(def.RANGE_NAME, () => Range)
	.run(Setup)
	.name;
