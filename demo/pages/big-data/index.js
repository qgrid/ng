Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.rows = [];
	ctrl.model = qgrid.model();
	const service = qgrid.service(ctrl.model);
	const count = 100000;
	
	ctrl.model
		.pagination({size: 20, count})
		.scroll({mode: 'virtual'})
		.row({height: 48})
		.edit({mode: 'cell'});

	const cancelBusy = service.busy();
	$http.get(`data/people/${count}.json`)
		.then(response => {
			ctrl.rows = response.data;
			cancelBusy();
		});
}