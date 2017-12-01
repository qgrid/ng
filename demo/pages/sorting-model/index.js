Controller.$inject = ['$http'];
export default function Controller($http) {
	this.rows = [];

	$http.get('data/people/100.json')
		.then(response => this.rows = response.data);

	this.genderCompare = (x, y) => x.length - y.length;
}