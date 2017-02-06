Controller.$inject = ['$http', 'qgrid', '$timeout'];
export default function Controller($http, qgrid, $timeout) {
	const ctrl = this;
	ctrl.gridModel = qgrid.model();
	ctrl.gridModel.progress({isBusy: true});
	ctrl.gridModel.data({
		columns: [
			{
				key: 'name.last',
				title: 'Last Name',
				value: item => item.name.last
			},
			{
				key: 'name.first',
				title: 'First Name',
				value: item => item.name.first
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
				value: item => item.contact.address.zip
			},
			{
				key: 'contact.address.state',
				title: 'State',
				value: item => item.contact.address.state
			},
			{
				key: 'contact.address.city',
				title: 'City',
				value: item => item.contact.address.city
			},
			{
				key: 'contact.phone.primary',
				title: 'Primary Phone',
				value: item => item.contact.phone[0]
			},
			{
				key: 'contact.email.primary',
				title: 'Primary Email',
				value: item => item.contact.email[0]
			},
			{
				key: 'likes',
				title: 'Likes',
				value: item => item.likes.join(', ')
			},
			{
				key: 'memberSince',
				title: 'Member Since'
			}
		]
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.gridModel.data({
				rows: response.data
			});
			ctrl.gridModel.progress({isBusy: false});
		});
}