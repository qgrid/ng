import {guid} from '@grid/core/services';

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;

	this.rows = [];

	ctrl.addCommand = new qgrid.Command({
		execute: () => {
			const newRow = {
				'id': guid(),
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
			};

			this.rows = [newRow].concat(this.rows);
		},
		shortcut: 'F7'
	});


	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}