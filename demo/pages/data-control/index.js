import {guid} from '@grid/core/services';

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
			this.changes.edited.add(e.row.id);
			this.changes.edited.add(`${e.row.id}x${e.column.key}`);
		}
	});

	this.actions = [
		new qgrid.Action(
			new qgrid.Command({
				execute: () => {
					const newRow = {
						'id': guid(),
						'name': {
							'first': null,
							'last': null
						},
						'gender': 'male',
						'birthday': null,
						'contact': {
							'address': {
								'street': null,
								'zip': null,
								'city': null,
								'state': null
							},
							'email': [],
							'region': null,
							'phone': []
						},
						'likes': [],
						'memberSince': null
					};

					this.changes.added.add(newRow.id);
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
			),
			new qgrid.Action(
				new qgrid.Command({
					execute: e => {
						this.changes.deleted.delete(e.row.id);
					},
					canExecute: e => this.changes.deleted.has(e.row.id)
				}),
				'Restore',
				'restore'
			),
			new qgrid.Action(
				new qgrid.Command({
					execute: () => {
						// TODO make edit form service
					}
				}),
				'Edit Form',
				'edit'
			)
		]
	};

	this.styleRow = (row, context) => {
		if (this.changes.deleted.has(row.id)) {
			context.class('deleted', {opacity: 0.3});
		}
	};

	this.styleCell = (row, column, context) => {
		if (column.type === 'row-indicator') {
			if (this.changes.deleted.has(row.id)) {
				context.class('delete-indicator', {background: '#EF5350'});
			}
			else if (this.changes.added.has(row.id)) {
				context.class('add-indicator', {background: '#C8E6C9'});
			}
			else if (this.changes.edited.has(row.id)) {
				context.class('edit-indicator', {background: '#E3F2FD'});
			}

			return;
		}

		if (this.changes.edited.has(`${row.id}x${column.key}`)) {
			context.class('edited', {background: '#E3F2FD'});
		}
	};

	$http.get('data/people/10.json')
		.then(function (response) {
			ctrl.rows = response.data
				.map(row => {
					row.id = guid();
					return row;
				});
		});
}