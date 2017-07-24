Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.model = qgrid.model();
	const viewChangedOff = ctrl.model.viewChanged.on(e => {
		if (e.hasChanges('rows') && e.state.rows.length > 0) {
			viewChangedOff();

			const status = new Map();
			status.set(e.state.rows[0], new qgrid.RowDetailsStatus(true));
			ctrl.model.row({
				status: status
			});
		}
	});

	this.rows = [];
	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});


}