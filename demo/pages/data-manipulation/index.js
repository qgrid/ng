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

	this.actions = [
		new qgrid.Action(
			new qgrid.Command({
				execute: () => {
					const newRow = {
						"name": {
							"first": null,
							"last": null
						},
						"gender": "male",
						"birthday": null,
						"contact": {
							"address": {
								"street": null,
								"zip": null,
								"city": null,
								"state": null
							},
							"email": [],
							"region": null,
							"phone": []
						},
						"likes": [],
						"memberSince": null
					};

					this.changes.added.add(newRow);
					this.rows = [newRow].concat(this.rows);
				},
				shortcut: 'F7'
			}),
			'Add New Row',
			'add'
		)];

	this.rowOptions = {
		trigger: 'click',
		actions: [
			new qgrid.Action(
				new qgrid.Command({
					execute: e => {
						if (this.changes.added.has(e.row)) {
							this.changes.added.delete(e.row);
							this.rows = this.rows.filter(row => row !== e.row);
						}
						else {
							this.changes.deleted.add(e.row)
						}
					}
				}),
				'Delete Row',
				'delete'
			),
			new qgrid.Action(
				new qgrid.Command({
					execute: e => {
						this.changes.deleted.delete(e.row)
					},
					canExecute: e => this.changes.deleted.has(e.row)
				}),
				'Restore',
				'restore'
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

	this.styleRow = (row, context) => {
		if (this.changes.deleted.has(row)) {
			context.class('deleted', {opacity: 0.3});
		}
	};

	this.styleCell = (row, column, context) => {
		if (column.type === 'row-indicator') {
			if (this.changes.deleted.has(row)) {
				context.class('delete-indicator', {background: '#EF5350'});
			}
			else if (this.changes.added.has(row)) {
				context.class('add-indicator', {background: '#C8E6C9'});
			}
			else if (this.changes.edited.has(row)) {
				context.class('edit-indicator', {background: '#E3F2FD'});
			}
		}

		if (this.changes.edited.has(row) && this.changes.edited.has(column)) {
			context.class('edited', {background: '#E3F2FD'});
		}
	};

	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}