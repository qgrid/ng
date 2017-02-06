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

	ctrl.gridModel.data({
		pipe: [
			(data, ctx, next) => {
				$http.get('data/people/100.json')
					.then(function (response) {
						next(response.data);
					});
			},
			qgrid.pipe.filter
		]
	});

	ctrl.gridModel.filter({
		match: () => item => filter([item], ctrl.state.filter).length
	});
}