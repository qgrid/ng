import Grid from './components/grid/grid';
import GridService from './services/grid';

import {TemplatePath} from '@grid/core/template';
import Head from './components/head/head';
import Foot from './components/foot/foot';
import ColumnList from './components/column/column.list';
import Column from './components/column/column';
import Toolbar from './components/toolbar/toolbar';
import Drag from './components/dnd/drag';
import Drop from './components/dnd/drop';
import Layer from './components/layer/layer';
import CellValue from './components/cell/cell.value';
import Row from './components/row/row';

import BoxCore from './components/grid/box.core';
import ViewCore from './components/view/view.core';
import TableCore from './components/table/table.core';
import TrCore from './components/row/tr.core';
import TdCore from './components/body/td.core';
import TdAlignCore from './components/body/td.align.core';
import ThCore from './components/head/th.core';
import TfCore from './components/foot/tf.core';
import HeadCore from './components/head/head.core';
import BodyCore from './components/body/body.core';
import FootCore from './components/foot/foot.core';
import ToolbarCore from './components/toolbar/toolbar.core';

import Indeterminate from './directives/indeterminate';
import Focus from './directives/focus';
import Resize from './directives/resize';
import Markup from './directives/markup';
import FileUpload from './directives/file.upload';
import Raise from './directives/raise';
import Animate from './directives/animate';
import Position from './directives/position';
import Autofocus from './directives/autofocus';
import StopPropagate from './directives/stop.propagate';
import PreventDefault from './directives/prevent.default';
import Autosize from './directives/autosize';

import ThemeProvider from './services/theme';
import Range from './filters/range';
import Highlight from './filters/highlight';
import Pretty from './filters/prettify';

import * as def from './definition';
require('vscroll'); // TODO: make vscroll export
require('ng-expression-builder');

export const coreModule = angular.module(def.MODULE_CORE_NAME, []) // eslint-disable-line no-undef
	.directive(def.DRAG_NAME, () => Drag)
	.directive(def.DROP_NAME, () => Drop)
	.directive(def.INDETERMINATE_NAME, () => Indeterminate)
	.directive(def.FOCUS_NAME, () => Focus)
	.directive(def.RESIZE_NAME, () => Resize)
	.directive(def.FILE_UPLOAD_NAME, () => FileUpload)
	.directive(def.RAISE_NAME, () => Raise)
	.directive(def.CELL_VALUE_NAME, () => CellValue)
	.directive(def.ANIMATE_NAME, () => Animate)
	.directive(def.POSITION_NAME, () => Position)
	.directive(def.AUTOFOCUS_NAME, () => Autofocus)
	.directive(def.STOP_PROPAGATE_NAME, () => StopPropagate)
	.directive(def.PREVENT_DEFAULT_NAME, () => PreventDefault)
	.directive(def.AUTOSIZE_NAME, () => Autosize)
	.provider(def.THEME_NAME, () => new ThemeProvider())
	.service(def.TEMPLATE_PATH_NAME, () => () => TemplatePath)
	.filter(def.RANGE_NAME, () => Range)
	.filter(def.HIGHLIGHT_NAME, () => Highlight)
	.filter(def.PRETTY_NAME, () => Pretty)
	.config(['$compileProvider',
		$compileProvider => $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data):/)
	])
	.name;

// For now should be the last in import list cause use TemplatePath.require
// that should be filled before importing this
// TODO: get rid of static require
import Template from './components/template/template';

export const layoutModule = angular.module(def.MODULE_LAYOUT_NAME, [coreModule])  // eslint-disable-line no-undef
	.component(def.GRID_NAME, Grid)
	.component(def.BOX_CORE_NAME, BoxCore)
	.component(def.VIEW_CORE_NAME, ViewCore)
	.component(def.TABLE_CORE_NAME, TableCore)
	.component(def.HEAD_NAME, Head)
	.component(def.FOOT_NAME, Foot)
	.component(def.COLUMN_LIST_NAME, ColumnList)
	.component(def.COLUMN_NAME, Column)
	.component(def.LAYER_NAME, Layer)
	.component(def.TOOLBAR_NAME, Toolbar)
	.component(def.TOOLBAR_CORE_NAME, ToolbarCore)
	.component(def.ROW_NAME, Row)
	.directive(def.TEMPLATE_NAME, () => Template)
	.directive(def.MARKUP_NAME, () => Markup)
	.directive(def.TR_CORE_NAME, () => TrCore)
	.directive(def.TD_CORE_NAME, () => TdCore)
	.directive(def.TD_ALIGN_CORE_NAME, () => TdAlignCore)
	.directive(def.TH_CORE_NAME, () => ThCore)
	.directive(def.TF_CORE_NAME, () => TfCore)
	.directive(def.HEAD_CORE_NAME, () => HeadCore)
	.directive(def.BODY_CORE_NAME, () => BodyCore)
	.directive(def.FOOT_CORE_NAME, () => FootCore)
	.service(def.SERVICE_NAME, GridService)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	qgridThemeProvider.register('default', theme => {
		theme.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
		theme.put('qgrid.view.tpl.html', require('./components/view/view.html'));
		theme.put('qgrid.table.tpl.html', require('./components/table/table.html'));
		theme.put('qgrid.head.tpl.html', require('./components/head/head.html'));
		theme.put('qgrid.body.tpl.html', require('./components/body/body.html'));
		theme.put('qgrid.body.virtual.tpl.html', require('./components/body/body.virtual.html'));
		theme.put('qgrid.foot.tpl.html', require('./components/foot/foot.html'));
	});
}
