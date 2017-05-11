Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.rows = [];
	ctrl.model = qgrid.model();
	const service = qgrid.service(ctrl.model);

	ctrl.model
		.pagination({size: 20})
		.scroll({mode: 'virtual'})
		.row({height: 48});

	const cancelBusy = service.busy();
	$http.get('data/people/100000.json')
		.then(response => {
			ctrl.rows = response.data;
			cancelBusy();
		});
}