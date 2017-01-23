import angular from 'angular';
require('./index.scss');

export default angular
	.module('qgrid.theme.material', [])
	.run(Setup)
	.name;

Setup.$inject = ['$templateCache'];
function Setup(/*$templateCache*/) {
}