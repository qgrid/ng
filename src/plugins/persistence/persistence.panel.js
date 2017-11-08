import {Command} from '@grid/core/command';

export function PersistencePanelController(mdPanelRef) {
	const model = this.model;

	this.items = Array.from(model.persistence().items);

	this.cancel = new Command({
		execute: () => mdPanelRef.close()
	});

	this.submit = new Command({
		execute: () => {
			mdPanelRef.close();
		},
		canExecute: () => !!this.title
	});
}