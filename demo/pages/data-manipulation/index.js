Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;

	this.rows = [];

	this.rowOptions = {
		trigger: 'click',
		actions: [
			new qgrid.Action(
				new qgrid.Command({
					execute: e => {
						this.rows = this.rows.slice(e.rowIndex, 1);
					}
				}),
				'Delete Row',
				'delete'
			),
			new qgrid.Action(
				new qgrid.Command({
					execute: e => {

					}
				}),
				'Edit Form',
				'edit'
			)
		]
	};

	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}