Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;

	this.rows = [];

	ctrl.getValue = (item, prop) => {
		const props = prop.split('.');
		let result = item;
		for (let value of props) {
			// alert(item.pin);
			result = result[value];
		}
		return result;
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}