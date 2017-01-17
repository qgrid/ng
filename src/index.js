import angular from 'angular';
import Model from './core/infrastructure/model';
import Grid from './components/grid/grid';
import DataModel from './core/grid/data.model';
import SelectionModel from './core/grid/selection.model';
import BodyModel from './core/body/body.model';
import Body from './components/body/body';
import BodyTemplate from './components/body/body.template';
import Cell from './components/cell/cell';
import CellTemplate from './components/cell/cell.template';
import HeadModel from './core/head/head.model';
import Head from './components/head/head';
import HeadTemplate from './components/head/head.template';
import * as def from './definition';

Model.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('body', BodyModel)
	.register('head', HeadModel);

export default angular
	.module(def.MODULE_NAME, [])
	.component(def.GRID_NAME, Grid)
	.directive(def.HEAD_NAME, () => Head)
	.component(def.HEAD_TEMPLATE_NAME, HeadTemplate)
	.directive(def.BODY_NAME, () => Body)
	.component(def.BODY_TEMPLATE_NAME, BodyTemplate)
	.directive(def.CELL_NAME, () => Cell)
	.component(def.CELL_TEMPLATE_NAME, CellTemplate)
	.service(def.SERVICE_NAME, () => () => new Model())
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
	$templateCache.put('qgrid.head.cell.html', require('./components/head/cell.html'));
	$templateCache.put('qgrid.body.cell.html', require('./components/body/cell.html'));
}