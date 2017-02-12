Controller.$inject = ['$http', '$filter', 'qgrid'];
export default function Controller($http, $filter, qgrid) {
	const ctrl = this;
	const filter = $filter('filter');
	ctrl.state = {
		filter: ''
	};
	ctrl.gridModel = qgrid.model();
	const service = qgrid.service(ctrl.gridModel);

	ctrl.change = () => service.invalidate();

	ctrl.gridModel.filter({
		match: () => item => filter([item], ctrl.state.filter).length
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.gridModel.data({
				rows: response.data
			});
		});
}