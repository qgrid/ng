Controller.$inject = ['$http', '$filter', 'qgrid', '$q'];
export default function Controller($http, $filter, qgrid, $q) {
	const ctrl = this;
	const filter = $filter('filter');
	ctrl.state = {
		filter: ''
	};
	ctrl.gridModel = qgrid.model();
	const service = qgrid.service(ctrl.gridModel);

	ctrl.change = () => service.invalidate();

	ctrl.gridModel.filter({
		match: () => item => filter([item], ctrl.state.filter).length,
		fetch: (key, context) => {
			const defer = $q.defer();
			$http.get('data/people/100.json')
				.then(response => {
					defer.resolve(response.data.map(context.value));
				});

			return defer.promise;
		}
	});

	$http.get('data/people/100.json')
		.then(response => {
			ctrl.gridModel.data({
				rows: response.data
			});
		});
}