Controller.$inject = ['$http', '$timeout', 'qgrid'];
export default function Controller($http, $timeout, qgrid) {
	this.model = qgrid.model();
	this.rows = [];

	$http.get('data/people/100.json')
		.then(response => this.rows = response.data);

	$timeout(() => {

	}, 1000);
}