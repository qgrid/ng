'use strict';

// import GridModel from './grid.model';
// import Utility from '../../services/utility';

export default {
	templateUrl: 'qgrid.html',
	controller: Controller,
	bindings: {
		rows: '<',
		columns: '<'
	}
};

Controller.$inject = [];
function Controller() {
	//this.model = new GridModel();
	// TODO: investigate how to track changes in this case
	// or get rid of $scope or of GridModel
	//Utility.assign(this.model, $scope);
}