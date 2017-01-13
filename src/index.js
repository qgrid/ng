import angular from 'angular';
import Grid from './components/grid/grid';
import Model from './core/infrastructure/model';
import DataModel from './core/grid/data.model';

Model.register('data', DataModel);

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