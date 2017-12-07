Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	this.rows = [];

	this.model = qgrid.model();

	this.validate = value => {
		return {
			message: 'Should be more than 5',
			invalid: value.length > 5
		};
	};

	$http.get('data/people/100.json')
		.then(response => this.rows = response.data);
}
