Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	this.rows = [];

	this.model = qgrid.model();

	$http.get('data/people/100.json')
		.then(response => {
			this.rows = response.data;
		});
}
