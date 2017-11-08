export function PersistencePanelController() {
	const model = this.model;

	this.items = model.persistence().items;
}