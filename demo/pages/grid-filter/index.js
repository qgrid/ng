Controller.$inject = ['$http', '$filter', 'qgrid'];
export default function Controller($http, $filter, qgrid) {
	const ctrl = this;
	const filter = $filter('filter');

	ctrl.state = {
		filter: ''
	};
	ctrl.gridModel = qgrid.model();
	const service = qgrid.service(ctrl.gridModel);

	ctrl.change = () => service.invalidate();

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
		],
		pipe: [
			(data, ctx, next) => {
				$http.get('data/people/100.json')
					.then(function (response) {
						next(response.data);
					});
			},
			qgrid.pipe.filter
		]
	});

	ctrl.gridModel.filter({
		match: () => item => filter([item], ctrl.state.filter).length
	})
}