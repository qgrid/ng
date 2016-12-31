'use strict';

Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;

	this.rows = [];
	this.columns = [
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

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}