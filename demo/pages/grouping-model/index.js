Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	this.rows = [];

	this.getGroupLabel = node => `Invoice Number: ${node.key}`;

	this.rowOptions = {
		trigger: 'click',
		actions: [
			new qgrid.Action(
				new qgrid.Command({
					canExecute: e => {
						return !this.changes.deleted.has(e.row.id);
					},
					execute: e => {
						if (this.changes.added.has(e.row.id)) {
							this.changes.added.delete(e.row.id);
							this.rows = this.rows.filter(row => row.id !== e.row.id);
						}
						else {
							this.changes.deleted.add(e.row.id);
						}
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