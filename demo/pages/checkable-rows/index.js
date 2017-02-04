Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selection = [];
	this.rows = [];
	this.columns = [
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
	];

	this.selectionChanged = function (e) {
		$log.log(`qgrid.demo: selection changed ${e.state.items.length} on ${e.state.mode} mode`);
	};

	this.selectAll = () => {
		ctrl.selection = ctrl.rows;
	};

	this.selectTop10 = () => {
		ctrl.selection = ctrl.rows.slice(0, 10);
	};

	this.deselectAll = () => {
		ctrl.selection = [];
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
			ctrl.selection = response.data.slice(0, 4);
		});
}