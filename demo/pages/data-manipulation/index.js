import {guid} from '@grid/core/services';

Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;
	this.rows = [];

	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data
				.map(row => {
					row.id = guid();
					return row;
				});
		});
}