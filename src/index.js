import angular from 'angular';
import Grid from './components/grid/grid';

export default angular
	.module('qgrid', [])
	.component('qGrid', Grid)
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup($templateCache) {
	$templateCache.put('qgrid.html', require('./components/grid/grid.html'));
}