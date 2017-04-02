Controller.$inject = ['$http', '$timeout', 'qgrid'];
export default function Controller($http, $timeout, qgrid) {
	const ctrl = this;
	ctrl.gridModel = qgrid.model();
	const service = qgrid.service(ctrl.gridModel);
	const cancelBusy = service.busy();

	$timeout(() =>
		$http.get('data/people/100.json')
			.then(function (response) {
				ctrl.gridModel.data({
					rows: response.data
				});
				cancelBusy();
			}), 1000);
}