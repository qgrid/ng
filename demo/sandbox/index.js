'use strict';

Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;

	this.rows = [];
	this.columns = [
		{key: 'gender', title: 'Gender'},
		{key: 'birthday', title: 'Birthday'},
		{key: 'region', title: 'Region'},
		{key: 'memberSince', title: 'Member Since'}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}