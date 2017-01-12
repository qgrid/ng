'use strict';

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.gridModel = qgrid();

	const columns = [
		{
			key: 'name.last',
			title: 'Last Name',
			value: function (item) {
				return item.name.last;
			}
		},
		{
			key: 'name.first',
			title: 'First Name',
			value: function (item) {
				return item.name.first;
			}
		},
		{
			key: 'gender',
			title: 'Gender'
		},
		{
			key: 'birthday',
			title: 'Birthday'
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			value: function (item) {
				return item.contact.address.zip;
			}
		},
		{
			key: 'contact.address.state',
			title: 'State',
			value: function (item) {
				return item.contact.address.state;
			}
		},
		{
			key: 'contact.address.city',
			title: 'City',
			value: function (item) {
				return item.contact.address.city;
			}
		},
		{
			key: 'contact.phone.primary',
			title: 'Primary Phone',
			value: function (item) {
				return item.contact.phone[0];
			}
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			value: function (item) {
				return item.contact.email[0];
			}
		},
		{
			key: 'likes',
			title: 'Likes',
			value: function (item) {
				return item.likes.join(', ');
			}
		},
		{
			key: 'memberSince',
			title: 'Member Since'
		}
	];

	ctrl.gridModel.data({
		columns: columns
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.gridModel.data({rows: response.data});
		});
}