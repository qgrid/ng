Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;

	this.rows = [];
	this.rows = [];
	this.columns = [
		{
			key: 'avatar',
			title: 'Avatar',
			type: 'image',
			width: 80
		},
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
			type: 'id',
			path: 'contact.address.zip'
		},
		{
			key: 'salary',
			title: 'Salary',
			type: 'number',
			format: 2
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
		},
		{
			key: 'timeNow',
			title: 'Time Now',
			type: 'time',
			value: () => new Date().getTime()
		},
		{
			key: 'webPage',
			title: 'Web Page',
			type: 'url',
			value: (item) => `https://corp.portal.com/${item.name.last}.${item.name.first}`
		},
		{
			key: 'attachments',
			title: 'Attachments',
			type: 'file'
		}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;

			ctrl.rows[4].comment = 'Johnson Creek is a 25-mile (40 km) tributary of the Willamette River in the Portland.';
			ctrl.rows[1].password = '123';
			ctrl.rows[0].salary = 50000;
			ctrl.rows[2].salary = 120000;
		});
}