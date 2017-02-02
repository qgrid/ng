import angular from 'angular';

Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;
	const isUndef = angular.isUndefined;

	this.rows = [];
	this.columns = [
		{
			key: 'name.last',
			title: 'Last Name',
			value: (item, value) => isUndef(value) ? item.name.last : item.name.last = value
		},
		{
			key: 'name.first',
			title: 'First Name',
			value: (item, value) => isUndef(value) ? item.name.first : item.name.first = value
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
			value: (item, value) => isUndef(value) ? item.contact.address.zip : item.contact.address.zip = value
		},
		{
			key: 'contact.address.state',
			title: 'State',
			value: (item, value) => isUndef(value) ? item.contact.address.state : item.contact.address.state = value
		},
		{
			key: 'contact.address.city',
			title: 'City',
			value: (item, value) => isUndef(value) ? item.contact.address.city : item.contact.address.city = value
		},
		{
			key: 'contact.phone.primary',
			title: 'Primary Phone',
			value: item => item.contact.phone[0],
			canEdit: false
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			value: item => item.contact.email[0],
			canEdit: false
		},
		{
			key: 'likes',
			title: 'Likes',
			value: item => item.likes.join(', '),
			canEdit: false
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