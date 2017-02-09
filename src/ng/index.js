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
import Visibility from './plugins/visibility/visibility';
import ColumnChooser from './plugins/column-chooser/column.chooser';
import Progress from './plugins/progress/progress';

import ViewCore from './components/view/view.core';
import ViewportCore from './components/grid/viewport.core';
import TableCore from './components/grid/table.core';
import TdCore from './components/body/td.core';
import ThCore from './components/head/th.core';
import TfCore from './components/foot/tf.core';
import HeadCore from './components/head/head.core';
import BodyCore from './components/body/body.core';
import FootCore from './components/foot/foot.core';
import StickyCore from './components/sticky/sticky.core';
import ToolbarCore from './components/toolbar/toolbar.core';
import SelectionCore from './components/selection/selection.core';

import Indeterminate from './directives/indeterminate';
import Focus from './directives/focus';
import Resizable from './directives/resizable';

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
	.component(def.VISIBILITY_NAME, Visibility)
	.component(def.COLUMNCHOOSER_NAME, ColumnChooser)
	.component(def.PROGRESS_NAME, Progress)
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
	.directive(def.STICKY_CORE_NAME, () => StickyCore)
	.directive(def.INDETERMINATE_NAME, () => Indeterminate)
	.directive(def.FOCUS_NAME, () => Focus)
	.directive(def.RESIZABLE_NAME, () => Resizable)
	.factory(def.SERVICE_NAME, () => GridService)
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
	$templateCache.put('qgrid.toolbar.right.tpl.html', require('./components/toolbar/toolbar.right.html'));
	$templateCache.put('qgrid.toolbar.left.tpl.html', require('./components/toolbar/toolbar.left.html'));

	$templateCache.put('qgrid.head.pad.cell.tpl.html', EMPTY);
	$templateCache.put('qgrid.body.pad.cell.tpl.html', EMPTY);
	$templateCache.put('qgrid.foot.pad.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.pivot.cell.tpl.html', require('./components/cell/pivot/head.pivot.cell.html'));
	$templateCache.put('qgrid.body.pivot.cell.tpl.html', require('./components/cell/pivot/body.pivot.cell.html'));
	$templateCache.put('qgrid.foot.pivot.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.group.cell.tpl.html', require('./components/cell/group/head.group.cell.html'));
	$templateCache.put('qgrid.body.group.cell.tpl.html', require('./components/cell/group/body.group.cell.html'));
	$templateCache.put('qgrid.foot.group.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.text.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.text.cell.tpl.html', require('./components/cell/text/body.text.cell.html'));
	$templateCache.put('qgrid.foot.text.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.text.cell.edit.tpl.html', require('./components/cell/text/body.text.cell.edit.html'));
	$templateCache.put('qgrid.body.text-area.cell.edit.tpl.html', require('./components/cell/text/body.text.cell.edit.html'));

	$templateCache.put('qgrid.head.row-number.cell.tpl.html', require('./components/cell/row-number/head.row.number.cell.html'));
	$templateCache.put('qgrid.body.row-number.cell.tpl.html', require('./components/cell/row-number/body.row.number.cell.html'));
	$templateCache.put('qgrid.foot.row-number.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.row-indicator.cell.tpl.html', EMPTY);
	$templateCache.put('qgrid.body.row-indicator.cell.tpl.html', require('./components/cell/row-indicator/body.row.indicator.cell.html'));
	$templateCache.put('qgrid.foot.row-indicator.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.head.date.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.date.cell.tpl.html', require('./components/cell/date/body.date.cell.html'));
	$templateCache.put('qgrid.foot.date.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.date.cell.edit.tpl.html', require('./components/cell/date/body.date.cell.edit.html'));

	$templateCache.put('qgrid.head.password.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.password.cell.tpl.html', require('./components/cell/password/body.password.cell.html'));
	$templateCache.put('qgrid.foot.password.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.password.cell.edit.tpl.html', require('./components/cell/password/body.password.cell.edit.html'));

	$templateCache.put('qgrid.head.bool.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.bool.cell.tpl.html', require('./components/cell/bool/body.bool.cell.html'));
	$templateCache.put('qgrid.foot.bool.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.bool.cell.edit.tpl.html', require('./components/cell/bool/body.bool.cell.edit.html'));

	$templateCache.put('qgrid.head.number.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.number.cell.tpl.html', require('./components/cell/text/body.text.cell.html'));
	$templateCache.put('qgrid.foot.number.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.number.cell.edit.tpl.html', require('./components/cell/number/body.number.cell.edit.html'));

	$templateCache.put('qgrid.head.array.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.array.cell.tpl.html', require('./components/cell/array/body.array.cell.html'));
	$templateCache.put('qgrid.foot.array.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.array.cell.edit.tpl.html', require('./components/cell/array/body.array.cell.edit.html'));

	$templateCache.put('qgrid.head.email.cell.tpl.html', require('./components/cell/text/head.text.cell.html'));
	$templateCache.put('qgrid.body.email.cell.tpl.html', require('./components/cell/email/body.email.cell.html'));
	$templateCache.put('qgrid.foot.email.cell.tpl.html', require('./components/cell/text/foot.text.cell.html'));
	$templateCache.put('qgrid.body.email.cell.edit.tpl.html', require('./components/cell/text/body.text.cell.edit.html'));

	$templateCache.put('qgrid.head.select.cell.tpl.html', require('./components/cell/select/head.select.cell.html'));
	$templateCache.put('qgrid.body.select.cell.tpl.html', require('./components/cell/select/body.select.cell.html'));
	$templateCache.put('qgrid.foot.select.cell.tpl.html', EMPTY);

	$templateCache.put('qgrid.plugin.pager.tpl.html', require('./plugins/pagination/pager.html'));
	$templateCache.put('qgrid.plugin.progress.tpl.html', require('./plugins/progress/progress.html'));
	$templateCache.put('qgrid.plugin.sortbar.tpl.html', require('./plugins/sortbar/sortbar.html'));
	$templateCache.put('qgrid.plugin.groupbar.tpl.html', require('./plugins/groupbar/groupbar.html'));
	$templateCache.put('qgrid.plugin.pivotbar.tpl.html', require('./plugins/pivotbar/pivotbar.html'));
	$templateCache.put('qgrid.plugin.visibility.tpl.html', require('./plugins/visibility/visibility.html'));
	$templateCache.put('qgrid.plugin.columnchooser.tpl.html', require('./plugins/column-chooser/column.chooser.html'));
}