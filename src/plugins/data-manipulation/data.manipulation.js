import PluginComponent from '../plugin.component';
import {DATA_MANIPULATION_NAME} from '../definition';
import {Command} from '@grid/core/command';
import {TemplatePath} from '@grid/core/template';
import {Action} from '@grid/core/action';
import {AppError} from '@grid/core/infrastructure';
import {isUndefined} from '@grid/core/utility';

TemplatePath
	.register(DATA_MANIPULATION_NAME, () => {
		return {
			model: 'dataManipulation',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('data-manipulation', {models: ['dataManipulation']});
class DataManipulation extends Plugin {
	constructor() {
		super(...arguments);

		this.commitCommand = new Command({
			execute: e => {
				if (e.column.class !== 'data') {
					return;
				}

				const rowId = this.rowId(e.row);
				const edited = this.changes.edited;

				let entries = edited.get(rowId);
				if (!entries) {
					entries = [];
					edited.set(rowId, entries);
				}

				let entryIndex = entries.findIndex(entry => entry.column === e.column.key);
				let entry = entries[entryIndex];
				if (!entry) {
					entry = {
						column: e.column.key,
						oldValue: e.oldValue,
						oldLabel: e.oldLabel
					};

					entryIndex = entries.length;
					entries.push(entry);
				}

				entry.newValue = e.newValue;
				entry.newLabel = e.newLabel;

				// TODO: understand if we need to track label changes?
				if (!this.hasChanges(entry.newValue, entry.oldValue)) {
					entries.splice(entryIndex, 1);
					if (!entries.length) {
						edited.delete(rowId);
					}
				}
			}
		});

		this.actions = [
			new Action(
				new Command({
					execute: () => {
						const newRow = this.rowFactory(this.model.data().rows[0]);
						if (isUndefined(newRow)) {
							throw new AppError('data.manipulation', 'Setup rowFactory property to add new rows');
						}

						const rowId = this.rowId(newRow);
						const data = this.model.data;

						this.changes.added.add(rowId);
						data({
							rows: [newRow].concat(data().rows)
						});
					},
					shortcut: 'F7'
				}),
				'Add New Row',
				'add'
			)];

		this.rowActions = [
			new Action(
				new Command({
					canExecute: e => {
						const rowId = this.rowId(e.row);
						return !this.changes.deleted.has(rowId);
					},
					execute: e => {
						const rowId = this.rowId(e.row);
						const changes = this.changes;
						if (changes.added.has(rowId)) {
							changes.added.delete(rowId);
							const data = this.model.data;
							const rows = data().rows.filter(row => this.rowId(row) !== rowId);
							data({
								rows: rows
							});
						}
						else {
							changes.deleted.add(rowId);
						}
					}
				}),
				'Delete Row',
				'delete'
			),
			new Action(
				new Command({
					execute: e => {
						const rowId = this.rowId(e.row);
						this.changes.deleted.delete(rowId);
					},
					canExecute: e => {
						const rowId = this.rowId(e.row);
						return this.changes.deleted.has(rowId);
					}
				}),
				'Restore',
				'restore'
			),
			// new Action(
			// 	new Command({
			// 		execute: () => {
			// 			// TODO make edit form service
			// 		}
			// 	}),
			// 	'Edit Form',
			// 	'edit'
			// )
		];
	}

	onInit() {
		const model = this.model;
		this.rowId = model.dataManipulation().rowId;
		this.rowFactory = model.dataManipulation().rowFactory;

		model
			.edit({
				mode: 'cell',
				commit: this.commitCommand
			})
			.style({
				row: this.styleRow.bind(this),
				cell: this.styleCell.bind(this)
			})
			.action({
				items: this.actions
			});

		model.dataChanged.watch((e, off) => {
			if (e.hasChanges('columns')) {
				const rowOptionsColumn = model.data().columns.find(column => column.type === 'row-options');
				if (rowOptionsColumn) {
					rowOptionsColumn.editorOptions.actions.push(...this.rowActions);
					off();
				}
			}
		});
	}

	hasChanges(newValue, oldValue) {
		// TODO: understand if we need to parse values (e.g. '12' vs 12)
		return newValue !== oldValue;
	}

	styleRow(row, context) {
		const rowId = this.rowId(row);
		if (this.changes.deleted.has(rowId)) {
			context.class('deleted', {opacity: 0.3});
		}
	}

	styleCell(row, column, context) {
		const rowId = this.rowId(row);
		const changes = this.changes;
		if (column.type === 'row-indicator') {
			if (changes.deleted.has(rowId)) {
				context.class('delete-indicator', {background: '#EF5350'});
			}
			else if (changes.added.has(rowId)) {
				context.class('add-indicator', {background: '#C8E6C9'});
			}
			else if (changes.edited.has(rowId)) {
				context.class('edit-indicator', {background: '#E3F2FD'});
			}

			return;
		}

		if (changes.edited.has(rowId)) {
			const entries = changes.edited.get(rowId);
			if (entries.findIndex(entry => entry.column === column.key) >= 0) {
				context.class('edited', {background: '#E3F2FD'});
			}
		}
	}

	get changes() {
		const model = this.model;
		return model.dataManipulation();
	}

	get resource() {
		return this.model.dataManipulation().resource;
	}
}

export default DataManipulation.component({
	controller: DataManipulation,
	controllerAs: '$data',
	bindings: {
		dataManipulationRowFactory: '<rowFactory',
		dataManipulationRowId: '<rowId'
	}
});