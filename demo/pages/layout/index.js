Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;
	ctrl.rows = [];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}