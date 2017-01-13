import angular from 'angular';
import Grid from './components/grid/grid';
import Body from './components/body/body';
import Cell from './components/cell/cell';
import Model from './core/infrastructure/model';
import DataModel from './core/grid/data.model';
import SelectionModel from './core/grid/selection.model';
import BodyModel from './core/body/body.model';
import CellModel from './core/cell/cell.model';

Model.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('body', BodyModel)
	.register('cell', CellModel);

export default angular
	.module('qgrid', [])
	.component('qGrid', Grid)
	.component('qGridBody', Body)
	.component('qGridCell', Cell)
	.service('qgrid', () => () => new Model())
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
}