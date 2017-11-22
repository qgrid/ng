import {Command, CommandManager} from '@grid/core/command';
import {PersistenceService} from '@grid/core/persistence/persistence.service';
import {stringifyFactory} from '@grid/core/services/';
import {Shortcut, ShortcutDispatcher}  from '@grid/core/shortcut';
import {clone} from '@grid/core/utility';

export function PersistencePanelController(mdPanelRef) {
	const model = this.model;
	const storageKey = this.storageKey;
	const persistenceService = new PersistenceService(model);

	this.items = [];
	this.state = {
		editItem: null,
		oldValue: null
	};

	model.persistence()
		.storage
		.getItem(storageKey)
		.then(items => {
			this.items = items || [];

			this.title = this.stringify({model: persistenceService.save()});
		});

	this.close = () => mdPanelRef.close();

	this.cancel = new Command({
		source: 'persistence.panel',
		execute: this.close
	});

	this.submit = new Command({
		source: 'persistence.panel',
		execute: () => {
			this.items.push({
				title: this.title,
				modified: Date.now(),
				model: persistenceService.save(),
				isDefault: false
			});

			model.persistence()
				.storage
				.setItem(storageKey, this.items);

			this.title = '';

			return true;
		},
		canExecute: () => !!this.title && !this.items.some(item => item.title === this.title)
	});

	this.edit = {
		enter: new Command({
			source: 'persistence.panel',
			shortcut: 'enter',
			execute: item => {
				item = item || this.items.find(this.isActive);
				if (!item) {
					return false;
				}
				this.state.editItem = item;
				this.state.oldValue = clone(item);
				return true;
			},
			canExecute: () => this.state.editItem === null
		}),
		commit: new Command({
			source: 'persistence.panel',
			shortcut: 'enter',
			execute: item => {
				item = item || this.state.editItem;
				item.modified = Date.now();
				model.persistence()
					.storage
					.setItem(storageKey, this.items);
				this.state.editItem = null;
				return true;
			},
			canExecute: () => this.state.editItem !== null
		}),
		cancel: new Command({
			source: 'persistence.panel',
			shortcut: 'escape',
			execute: () => {
				if (this.state.editItem !== null) {
					const index = this.items.indexOf(this.state.editItem);
					this.items.splice(index, 1, this.state.oldValue);
					this.state.oldValue = null;
					this.state.editItem = null;
				} else {
					this.close();
				}
				return true;
			}
		})
	};

	this.load = new Command({
		source: 'persistence.panel',
		execute: item => persistenceService.load(item.model)
	});

	this.remove = new Command({
		source: 'persistence.panel',
		execute: item => {
			const index = this.items.indexOf(item);
			if (index >= 0) {
				this.items.splice(index, 1);

				model.persistence()
					.storage
					.setItem(storageKey, this.items);
				return true;
			}
			return false;
		}
	});

	this.setDefault = new Command({
		source: 'persistence.panel',
		execute: item => {
			const index = this.items.indexOf(item);
			if (index === -1) {
				return false;
			}

			if (item.isDefault) {
				item.isDefault = false;
			} else {
				this.items.forEach(i => i.isDefault = false);
				item.isDefault = true;
			}
			this.items.splice(index, 1, item);

			model.persistence()
				.storage
				.setItem(storageKey, this.items);
			return true;
		}
	});

	this.isActive = item => JSON.stringify(item.model) === JSON.stringify(persistenceService.save()); // eslint-disable-line angular/json-functions

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
	};

	const commandManager = new CommandManager();
	const shortcut = new Shortcut(new ShortcutDispatcher());

	this.keyDown = e => shortcut.keyDown(e);

	shortcut.register(commandManager, [
		this.edit.enter,
		this.edit.commit,
		this.edit.cancel]);
}

PersistencePanelController.$inject = ['mdPanelRef'];