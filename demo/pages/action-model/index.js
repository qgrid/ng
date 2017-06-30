Controller.$inject = ['$http'];
export default function Controller($http) {
	const ctrl = this;

	this.rows = [];

	// this.actions = [
	// 	new qgrid.Action(
	// 		new qgrid.Command({
	// 			execute: () => {
	// 				alert('Yay');
	// 			},
	// 			shortcut: 'F7'
	// 		}),
	// 		'Add New Row',
	// 		'add'
	// 	)];

	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}