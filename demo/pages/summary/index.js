Controller.$inject = ['$http'];

export default function Controller($http) {
	const ctrl = this;
	this.rows = [];

	this.getCountEvenZip = function (rows, getter) {
		return rows.map(getter).filter(z => z % 2).length;
	};

	this.getCountGender = function (rows, gender) {
		return rows.filter(r => r.gender === gender).length;
	};


	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}