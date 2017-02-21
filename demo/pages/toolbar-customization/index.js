Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;
	this.rows = [];

	this.load = () =>
		$http.get('data/people/100.json')
			.then(function (response) {
				ctrl.rows = response.data;
			});

	this.clear = () => ctrl.rows = [];
}