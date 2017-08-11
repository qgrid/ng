Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.gridModel = qgrid.model();
	ctrl.gridModel.visibility({
		plugin: {
			pager: false
		}
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.gridModel.data({
				rows: response.data
			});
		});
}