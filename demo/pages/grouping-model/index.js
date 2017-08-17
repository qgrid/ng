Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	this.rows = [];

	this.getGroupLabel = node => `Invoice Number: ${node.key}`;
	this.getTotal = row => row.quantity * row.price;

	this.rowOptions = {
		trigger: 'click',
		actions: [
			new qgrid.Action(
				new qgrid.Command({
					canExecute: () => {
						return true;
					},
					execute: () => {

					}
				}),
				'Delete Row',
				'delete'
			)
		]
	};

	$http.get('data/invoice/5.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}