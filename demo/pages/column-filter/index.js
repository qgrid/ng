import uniqBy from 'lodash/uniqBy';

Controller.$inject = ['$http', 'qgrid', '$q', '$timeout', '$filter'];
export default function Controller($http, qgrid, $q, $timeout, $filter) {
	const ctrl = this;
	ctrl.gridModel = qgrid.model();

	ctrl.gridModel.filter({
		fetch: (key, context) => {
			const defer = $q.defer();
			$http.get('data/people/100.json')
				.then(response => {
					$timeout(() => {
						const data = response.data.map(context.value);
						const uniqData = uniqBy(data, JSON.stringify);
						const filteredData = $filter('filter')(uniqData, context.filter);
						filteredData.sort();

						const page = filteredData.slice(context.skip, context.skip + context.take);
						defer.resolve(page);
					}, 1000);
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