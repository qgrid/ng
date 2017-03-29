import uniq from 'lodash/uniq';

Controller.$inject = ['$http', 'qgrid', '$q'];
export default function Controller($http, qgrid, $q) {
	const ctrl = this;
	ctrl.gridModel = qgrid.model();

	ctrl.gridModel.filter({
		fetch: (key, context) => {
			const defer = $q.defer();
			$http.get('data/people/100.json')
				.then(response => {
					const data = response.data.map(context.value);
					const uniqData = uniq(data);
					uniqData.sort();

					const page = uniqData.slice(context.skip, context.skip + context.take);
					defer.resolve(page);
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