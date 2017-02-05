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
			type: 'text',
			value: (item, value) => isUndef(value) ? item.name.last : item.name.last = value
		},
		{
			key: 'name.first',
			title: 'First Name',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.name.first : item.name.first = value
		},
		{
			key: 'gender',
			title: 'Is Female',
			type: 'bool',
			value: (item, value) => isUndef(value) ? item.gender === 'female' : item.gender = value ? 'female' : 'male'
		},
		{
			key: 'birthday',
			title: 'Birthday',
			type: 'date'
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			type: 'number',
			value: (item, value) => isUndef(value) ? item.contact.address.zip : item.contact.address.zip = value
		},
		{
			key: 'contact.address.state',
			title: 'State',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.contact.address.state : item.contact.address.state = value
		},
		{
			key: 'contact.address.city',
			title: 'City',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.contact.address.city : item.contact.address.city = value
		},
		{
			key: 'contact.phone.primary',
			title: 'Contact Phones',
			type: 'array',
			value: item => item.contact.phone,
			canEdit: false
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			type: 'email',
			value: item => item.contact.email[0],
			canEdit: false
		},
		{
			key: 'likes',
			title: 'Likes',
			type: 'array',
			canEdit: false
		},
		{
			key: 'memberSince',
			title: 'Member Since',
			type: 'date'
		}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}