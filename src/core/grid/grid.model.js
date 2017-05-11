import guid from '@grid/core/services/guid';

export default class GridModel {
	constructor() {
		this.id = `q-grid-${guid()}`;
	}
}