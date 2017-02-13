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
			path: 'name.last'
		},
		{
			key: 'name.first',
			title: 'First Name',
			type: 'text',
			path: 'name.first'
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
			key: 'comment',
			title: 'Comment',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.comment || '' : item.comment = value,
			editor: 'text-area',
			width: 200
		},
		{
			key: 'password',
			title: 'Password',
			type: 'password',
			value: (item, value) => isUndef(value) ? item.password || '' : item.password = value
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			type: 'number',
			path: 'contact.address.zip',
			width: 70
		},
		{
			key: 'contact.address.state',
			title: 'State',
			type: 'text',
			path: 'contact.address.state',
			width: 70
		},
		{
			key: 'contact.address.city',
			title: 'City',
			type: 'text',
			path: 'contact.address.city'
		},
		{
			key: 'contact.phone',
			title: 'Contact Phones',
			type: 'array',
			path: 'contact.phone',
			width: 100
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
			type: 'array'
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

			ctrl.rows[0].password = 'foo';
			ctrl.rows[3].password = 'bar';
			ctrl.rows[4].comment = 'Johnson Creek is a 25-mile (40 km) tributary of the Willamette River in the Portland.';
		});
}