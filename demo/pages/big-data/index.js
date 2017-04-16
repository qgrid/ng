Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.rows = [];
	ctrl.model = qgrid.model();
	const service = qgrid.service(ctrl.model);

	ctrl.model.pagination({
		// Number of item in viewport
		size: 20
	});

	ctrl.model.scroll({
		mode: 'virtual'
	});

	const cancelBusy = service.busy();
	$http.get('data/people/100000.json')
		.then(response => {
			ctrl.rows = response.data;
			cancelBusy();
		});
}