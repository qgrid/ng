import angular from 'angular';
import Model from './core/infrastructure/model';
import Grid from './components/grid/grid';

import DataModel from './core/grid/data.model';
import HeadModel from './core/head/head.model';
import BodyModel from './core/body/body.model';
import SelectionModel from './core/grid/selection.model';
import FootModel from './core/foot/foot.model';

import Template from './components/template/tempate';
import ColumnList from './components/column/column.list';
import Column from './components/column/column';

import ViewCore from './components/grid/view.core';
import CellCore from './components/cell/cell.core';
import HeadCore from './components/head/head.core';
import BodyCore from './components/body/body.core';
import FootCore from './components/foot/foot.core';

import * as def from './definition';

Model.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('head', HeadModel)
	.register('body', BodyModel)
	.register('foot', FootModel);

export default angular
	.module(def.MODULE_NAME, [])
	.component(def.GRID_NAME, Grid)
	.directive(def.VIEW_CORE_NAME, () => ViewCore)
	.directive(def.CELL_CORE_NAME, () => CellCore)
	.directive(def.HEAD_CORE_NAME, () => HeadCore)
	.directive(def.BODY_CORE_NAME, () => BodyCore)
	.directive(def.FOOT_CORE_NAME, () => FootCore)
	.component(def.TEMPLATE_NAME, Template)
	.component(def.COLUMN_LIST_NAME, () => ColumnList)
	.component(def.COLUMN_NAME, Column)
	.service(def.SERVICE_NAME, () => () => new Model())
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.tpl.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.head.cell.tpl.html', require('./components/head/cell.html'));
	$templateCache.put('qgrid.body.cell.tpl.html', require('./components/body/cell.html'));
	$templateCache.put('qgrid.foot.cell.tpl.html', require('./components/foot/cell.html'));
}