import angular from 'angular';
import Grid from './components/grid/grid';
import Model from './core/infrastructure/model';
import DataModel from './core/grid/data.model';
import SelectionModel from './core/grid/selection.model';

Model.register('data', DataModel)
	.register('selection', SelectionModel);

export default angular
	.module('qgrid', [])
	.component('qGrid', Grid)
	.service('qgrid', () => () => new Model())
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
}