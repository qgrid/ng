import Resource from '../resource/resource';
import guid from 'core/services/guid';

export default class GridModel {
	constructor() {
		this.resource = new Resource();
		this.id = `q-grid-${guid()}`;
	}
}