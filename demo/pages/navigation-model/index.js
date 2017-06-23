Controller.$inject = ['$http', 'qgrid', '$timeout'];
export default function Controller($http, qgrid, $timeout) {
	const ctrl = this;
	this.gridModel = qgrid.model();
	this.rows = [];

	this.navigateTo = (row, column) => {
		ctrl.gridModel.focus({
			rowIndex: row,
			columnIndex: column
		});
	};

	$timeout(() => $http.get('data/people/100.json')
		.then(response => this.rows = response.data), 1000);
}