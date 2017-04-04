Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.rows = [];
	ctrl.model = qgrid.model();

	ctrl.model.pagination({
		size: Number.MAX_SAFE_INTEGER
	});

	ctrl.model.scroll({
		y: {
			threshold: 10
		}
	});

	$http.get('data/people/100000.json')
		.then(response => ctrl.rows = response.data);
}