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

import ThemeProvider from './services/theme';
import Range from './filters/range';
import Highlight from './filters/highlight';
import Pin from './filters/pin';

import * as def from './definition';
require('vscroll'); // TODO: make vscroll export

export const coreModule = angular.module(def.MODULE_CORE_NAME, [])
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
	.provider(def.THEME_NAME, () => new ThemeProvider())
	.service(def.TEMPLATE_PATH_NAME, () => () => TemplatePath)
	.filter(def.RANGE_NAME, () => Range)
	.filter(def.HIGHLIGHT_NAME, () => Highlight)
	.filter(def.PIN_NAME, () => Pin)
	.config(['$compileProvider',
		$compileProvider => $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data):/)
	])
	.name;

// For now should be the last in import list cause use TemplatePath.require
// that should be filled before importing this
// TODO: get rid of static require
import Template from './components/template/template';

export const layoutModule = angular.module(def.MODULE_LAYOUT_NAME, [coreModule])
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
	const EMPTY = '';

	qgridThemeProvider.register('default', theme => {
		theme.put('qgrid.grid.tpl.html', require('./components/grid/grid.html'));
		theme.put('qgrid.view.tpl.html', require('./components/view/view.html'));
		theme.put('qgrid.table.tpl.html', require('./components/table/table.html'));
		theme.put('qgrid.head.tpl.html', require('./components/head/head.html'));
		theme.put('qgrid.body.tpl.html', require('./components/body/body.html'));
		theme.put('qgrid.body.virtual.tpl.html', require('./components/body/body.virtual.html'));
		theme.put('qgrid.foot.tpl.html', require('./components/foot/foot.html'));

		theme.put('qgrid.toolbar.top.tpl.html', require('./components/toolbar/toolbar.top.html'));
		theme.put('qgrid.toolbar.bottom.tpl.html', require('./components/toolbar/toolbar.bottom.html'));
		theme.put('qgrid.toolbar.right.tpl.html', require('./components/toolbar/toolbar.right.html'));
		theme.put('qgrid.toolbar.left.tpl.html', require('./components/toolbar/toolbar.left.html'));

		theme.put('qgrid.head.cell.pad.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.pad.tpl.html', EMPTY);
		theme.put('qgrid.foot.cell.pad.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.pivot.tpl.html', require('./components/cell/pivot/head.cell.pivot.html'));
		theme.put('qgrid.body.cell.pivot.tpl.html', require('./components/cell/pivot/body.cell.pivot.html'));
		theme.put('qgrid.foot.cell.pivot.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.group.tpl.html', require('./components/cell/group/head.cell.group.html'));
		theme.put('qgrid.body.cell.group.tpl.html', require('./components/cell/group/body.cell.group.html'));
		theme.put('qgrid.foot.cell.group.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.text.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.text.tpl.html', require('./components/cell/text/body.cell.text.html'));
		theme.put('qgrid.foot.cell.text.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.text.edit.tpl.html', require('./components/cell/text/body.cell.text.edit.html'));
		theme.put('qgrid.body.cell.text-area.edit.tpl.html', require('./components/cell/text/body.cell.text.edit.html'));
		theme.put('qgrid.form.cell.text.edit.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-number.tpl.html', require('./components/cell/row-number/head.cell.row.number.html'));
		theme.put('qgrid.body.cell.row-number.tpl.html', require('./components/cell/row-number/body.cell.row.number.html'));
		theme.put('qgrid.foot.cell.row-number.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-expand.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.row-expand.tpl.html', require('./components/cell/row-expand/body.cell.row.expand.html'));
		theme.put('qgrid.foot.cell.row-expand.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-details.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.row-details.tpl.html', require('./components/cell/row-details/body.cell.row.details.html'));
		theme.put('qgrid.foot.cell.row-details.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-indicator.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.row-indicator.tpl.html', require('./components/cell/row-indicator/body.cell.row.indicator.html'));
		theme.put('qgrid.foot.cell.row-indicator.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.row-options.tpl.html', EMPTY);
		theme.put('qgrid.body.cell.row-options.tpl.html', require('./components/cell/row-options/body.cell.row.options.html'));
		theme.put('qgrid.foot.cell.row-options.tpl.html', EMPTY);

		theme.put('qgrid.head.cell.date.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.date.tpl.html', require('./components/cell/date/body.cell.date.html'));
		theme.put('qgrid.foot.cell.date.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.date.edit.tpl.html', require('./components/cell/date/body.cell.date.edit.html'));

		theme.put('qgrid.head.cell.password.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.password.tpl.html', require('./components/cell/password/body.cell.password.html'));
		theme.put('qgrid.foot.cell.password.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.password.edit.tpl.html', require('./components/cell/password/body.cell.password.edit.html'));

		theme.put('qgrid.head.cell.bool.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.bool.tpl.html', require('./components/cell/bool/body.cell.bool.html'));
		theme.put('qgrid.foot.cell.bool.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.bool.edit.tpl.html', require('./components/cell/bool/body.cell.bool.edit.html'));

		theme.put('qgrid.head.cell.number.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.number.tpl.html', require('./components/cell/number/body.cell.number.html'));
		theme.put('qgrid.foot.cell.number.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.number.edit.tpl.html', require('./components/cell/number/body.cell.number.edit.html'));

		theme.put('qgrid.head.cell.array.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.array.tpl.html', require('./components/cell/array/body.cell.array.html'));
		theme.put('qgrid.foot.cell.array.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.array.edit.tpl.html', require('./components/cell/array/body.cell.array.edit.html'));

		theme.put('qgrid.head.cell.email.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.email.tpl.html', require('./components/cell/email/body.cell.email.html'));
		theme.put('qgrid.foot.cell.email.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.email.edit.tpl.html', require('./components/cell/text/body.cell.text.edit.html'));

		theme.put('qgrid.head.cell.time.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.time.tpl.html', require('./components/cell/time/body.cell.time.html'));
		theme.put('qgrid.foot.cell.time.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.time.edit.tpl.html', require('./components/cell/time/body.cell.time.edit.html'));

		theme.put('qgrid.head.cell.url.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.url.tpl.html', require('./components/cell/url/body.cell.url.html'));
		theme.put('qgrid.foot.cell.url.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.url.edit.tpl.html', require('./components/cell/url/body.cell.url.edit.html'));

		theme.put('qgrid.head.cell.file.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.file.tpl.html', require('./components/cell/file/body.cell.file.html'));
		theme.put('qgrid.foot.cell.file.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.file.edit.tpl.html', require('./components/cell/file/body.cell.file.edit.html'));

		theme.put('qgrid.head.cell.image.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.image.tpl.html', require('./components/cell/image/body.cell.image.html'));
		theme.put('qgrid.foot.cell.image.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.image.edit.tpl.html', require('./components/cell/image/body.cell.image.edit.html'));

		theme.put('qgrid.head.cell.reference.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.reference.tpl.html', require('./components/cell/reference/body.cell.reference.html'));
		theme.put('qgrid.foot.cell.reference.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.reference.edit.tpl.html', require('./components/cell/reference/body.cell.reference.edit.html'));

		theme.put('qgrid.head.cell.id.tpl.html', require('./components/cell/text/head.cell.text.html'));
		theme.put('qgrid.body.cell.id.tpl.html', require('./components/cell/text/body.cell.text.html'));
		theme.put('qgrid.foot.cell.id.tpl.html', require('./components/cell/text/foot.cell.text.html'));
		theme.put('qgrid.body.cell.id.edit.tpl.html', require('./components/cell/text/body.cell.text.edit.html'));

		theme.put('qgrid.head.cell.select.tpl.html', require('./components/cell/select/head.cell.select.html'));
		theme.put('qgrid.body.cell.select.tpl.html', require('./components/cell/select/body.cell.select.html'));
		theme.put('qgrid.foot.cell.select.tpl.html', EMPTY);

		theme.put('qgrid.body.cell.dropdown.edit.tpl.html', require('./components/cell/dropdown/body.cell.dropdown.edit.html'));
		theme.put('qgrid.body.cell.autocomplete.edit.tpl.html', require('./components/cell/autocomplete/body.cell.autocomplete.edit.html'));
	});
}