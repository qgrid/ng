Controller.$inject = ['$http', '$timeout', 'qgrid'];
export default function Controller($http, $timeout, qgrid) {
	const ctrl = this;

	ctrl.state = {
		progress: false,
		progressCount: 0
	};

	ctrl.gridModel = qgrid.model();
	ctrl.gridModel.data({
		pipe: [
			(data, ctx, next) => {
				ctrl.state.progress = true;
				ctrl.state.progressCount = ctrl.state.progressCount + 1;
				$http.get('data/people/100.json')
					.then(function (response) {
						$timeout(() => {
							next(response.data);
							ctrl.state.progress = false;
						}, 1000);
					});
			}]
			.concat(qgrid.pipeUnit.view)
	});

	$timeout(() => {
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
		});
	}, 1000);
}