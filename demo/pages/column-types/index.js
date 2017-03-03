Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;

	this.rows = [];
	this.rows = [];
	this.columns = [
		{
			key: 'name.last',
			title: 'Last Name',
			type: 'text',
			path: 'name.last'
		},
		{
			key: 'gender',
			title: 'Is Female',
			type: 'bool',
			value: (item) => item.gender === 'female'
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
			editor: 'text-area'
		},
		{
			key: 'password',
			title: 'Password',
			type: 'password',
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			type: 'number',
			path: 'contact.address.zip'
		},
		{
			key: 'contact.phone',
			title: 'Contact Phones',
			type: 'array',
			path: 'contact.phone',
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			type: 'email',
			value: (item) => item.contact.email[0]
		},
		{
			key: 'myTypeFromJS',
			title: 'My Type From js',
			type: 'my-type'
		}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;

			ctrl.rows[4].comment = 'Johnson Creek is a 25-mile (40 km) tributary of the Willamette River in the Portland.';
			ctrl.rows[1].password = '123';
		});
}