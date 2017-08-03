Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;
	this.rows = [];

	this.createRow = () => ({
		'name': {
			'first': null,
			'last': null
		},
		'gender': 'male',
		'birthday': null,
		'contact': {
			'address': {
				'street': null,
				'zip': null,
				'city': null,
				'state': null
			},
			'email': [],
			'region': null,
			'phone': []
		},
		'likes': [],
		'memberSince': null
	});

	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}