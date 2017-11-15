import angular from 'angular';

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const isUndef = angular.isUndefined;

	this.rows = [];
	this.columns = [
		{
			key: 'id',
			title: 'ID',
			type: 'id',
		},
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
			trueValue: 'female',
			falseValue: 'male'
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
			width: 200,
			maxLength: 8000
		},
		{
			key: 'password',
			title: 'Password',
			type: 'password',
			value: (item, value) => isUndef(value) ? item.password || '' : item.password = value,
			isDefault: false
		},
		{
			key: 'teammates',
			title: 'Teammates',
			type: 'reference',
			value: (item, value) => isUndef(value) ? item.teammates || [] : item.teammates = value,
			label: (item) => (item.teammates || []).map(mate => `${mate.name.last} ${mate.name.first}`).join(', '),
			editorOptions: {
				modelFactory: () => {
					const model = qgrid.model();
					model
						.selection({
							mode: 'multiple',
							unit: 'row'
						})
						.columnList({
							generation: 'deep'
						})
						.data({
							rows: ctrl.rows
						});

					return model;
				}
			}
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			type: 'number',
			path: 'contact.address.zip',
			width: 70,
			isDefault: false
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
			width: 250
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			type: 'email',
			value: item => item.contact.email[0]
		},
		{
			key: 'contact.email.secondary',
			title: 'Secondary Email',
			type: 'email',
			value: (item, value) => isUndef(value)
				? item.contact.email.secondary || ''
				: item.contact.email.secondary = value,
			editor: 'autocomplete',
			editorOptions: {
				fetch: (item, d, search='') => {
					$http.get('data/people/100.json').then(function (response) {
						const emails = response.data.reduce((result, item) => {
							return result.concat(item.contact.email.filter(email => email.indexOf(search) > -1));
						}, []);
						d.resolve(emails);
					});
				}
			}
		},
		{
			key: 'likes',
			title: 'Likes',
			type: 'array'
		},
		{
			key: 'memberSince',
			title: 'Member Since',
			type: 'date',
			isDefault: false
		},
		{
			key: 'isOnline',
			title: 'Online',
			type: 'bool',
			value: (item, value) => isUndef(value) ? isUndef(item.isOnline) ? null : item.isOnline : item.isOnline = value
		},
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;

			ctrl.rows.forEach((row, i) => row.id = i);

			ctrl.rows[0].password = 'foo';
			ctrl.rows[3].password = 'bar';
			ctrl.rows[4].comment = 'Johnson Creek is a 25-mile (40 km) tributary of the Willamette River in the Portland.';
		});
}