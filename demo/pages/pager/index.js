Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	this.rows = [];

	this.pipe = [
		(data, ctx, next) =>
			$http.get('data/people/100.json')
				.then(function (response) {
					next(response.data);
				}),
		qgrid.pipe.pagination
	];
}