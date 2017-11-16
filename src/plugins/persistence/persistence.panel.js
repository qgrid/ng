import {Command} from '@grid/core/command';
import {PersistenceService} from '@grid/core/persistence/persistence.service';
import {stringifyFactory} from '@grid/core/services/';

export function PersistencePanelController(mdPanelRef) {
	const model = this.model;
	const storageKey = this.storageKey;
	const persistenceService = new PersistenceService(model);

	this.items = [];
	model.persistence()
		.storage
		.getItem(storageKey)
		.then(items => {
			this.items = items || [];

			this.title = persistenceService.stringify(persistenceService.save());
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
				model: persistenceService.save(),
				default: false
			});

			model.persistence()
				.storage
				.setItem(storageKey, this.items);

			this.title = '';
		},
		canExecute: () => !!this.title && !this.items.some(item => item.title === this.title)
	});

	this.edit = new Command({
		execute: item => {
			item.modified = Date.now();
			model.persistence()
				.storage
				.setItem(storageKey, this.items);
		}
	});

	this.load = new Command({
		execute: item => persistenceService.load(item.model)
	});

	this.remove = new Command({
		execute: item => {
			const index = this.items.indexOf(item);
			if (index >= 0) {
				this.items.splice(index, 1);

				model.persistence()
					.storage
					.setItem(storageKey, this.items);
			}
		}
	});

	this.setDefault = new Command({
		canExecute: item => !item.default,
		execute: item => {
			const index = this.items.indexOf(item);
			if (index === -1) {
				return;
			}

			if (item.default) {
				item.default = false;
			} else {
				this.items.forEach(i => i.default = false);
				item.default = true;
			}
			this.items.splice(index, 1, item);

			model.persistence()
				.storage
				.setItem(storageKey, this.items);
		}
	});

	this.isActive = item => JSON.stringify(item.model) === JSON.stringify(persistenceService.save())

	this.stringify = item => {
		const model = item.model;
		const targets = [];
		const settings = this.model.persistence().settings;

		for (let key in settings) {
			const stringify = stringifyFactory(key);
			const target = stringify(model[key]);
			if (target !== '') {
				targets.push(target);
			}
		}

		return targets.join('; ') || 'No settings';
	}
}

PersistencePanelController.$inject = ['mdPanelRef'];