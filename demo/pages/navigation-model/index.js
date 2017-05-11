Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	this.gridModel = qgrid.model();
	this.rows = [];

	this.navigateTo = (row, column) => {
		ctrl.gridModel.focus({
			rowIndex: row,
			columnIndex: column
		});
	};

	$http.get('data/people/100.json')
		.then(response => this.rows = response.data);
}