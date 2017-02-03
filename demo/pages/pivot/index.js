Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;

	ctrl.gridModel = qgrid.model();
	ctrl.gridModel.visibility({
		toolbar: {
			left: false,
			right: true,
			top: true,
			bottom: true
		}
	});

	this.rows = [];

	this.getState = item => item.contact.address.state;
	this.getAgeInterval = item => {
		const age = this.getAge(item);
		const from = Math.floor(age / 10) * 10;
		return `${from}-${from + 9}`;
	};

	this.getAge = item => {
		const birthday = new Date(item.birthday);
		const ageDiff = Date.now() - birthday.getTime();
		const ageDate = new Date(ageDiff);
		const age = Math.abs(ageDate.getUTCFullYear() - 1970);
		return age;
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}