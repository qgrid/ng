Controller.$inject = ['$http'];

export default function Controller($http) {

	$http.get('data/people/100.json')
		.then((response) => {
			this.rows = response.data;
		});
}