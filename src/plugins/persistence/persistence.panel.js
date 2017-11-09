import {Command} from '@grid/core/command';
import {PersistenceService} from '@grid/core/persistence/persistence.service';

export function PersistencePanelController(mdPanelRef) {
	const model = this.model;
	const persistenceService = new PersistenceService(model);

	this.items = [];
	model.persistence()
		.storage
		.getItem('q-grid:persistence-list')
		.then(items => {
			this.items = items || [];
		});

	this.close = () => mdPanelRef.close();

	this.cancel = new Command({
		execute: this.close
	});

	this.submit = new Command({
		execute: () => {
			this.items.push({
				title: this.title,
				modified: Date.now(),
				model: persistenceService.save()
			});

			model.persistence()
				.storage
				.setItem('q-grid:persistence-list', this.items);
		},
		canExecute: () => !!this.title
	});

	this.load = new Command({
		execute: item => {
			persistenceService.load(item.model);
		}
	});

	this.remove = new Command({
		execute: item => {
			const index = this.items.indexOf(item);
			if (index >= 0) {
				this.items.splice(index, 1);

				model.persistence()
					.storage
					.setItem('q-grid:persistence-list', this.items);
			}
		}
	});
}