Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;

	this.rows = [];
	this.changes = {
		deleted: new Set(),
		added: new Set(),
		edited: new Set()
	};

	this.commitCommand = new qgrid.Command({
		execute: e => {
			this.changes.edited.add(e.row);
			this.changes.edited.add(e.column);
		}
	});

	this.styleRow = (row, context) => {
		if (this.changes.deleted.has(row)) {
			context.class('deleted', {opacity: 0.3});
		}
	};

	this.styleCell = (row, column, context) => {
		if (this.changes.edited.has(row) && this.changes.edited.has(column)) {
			context.class('edited', {background: '#E3F2FD'});
		}
	};

	this.rowOptions = {
		trigger: 'click',
		actions: [
			new qgrid.Action(
				new qgrid.Command({
					execute: e => {
						this.changes.deleted.add(e.row)
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