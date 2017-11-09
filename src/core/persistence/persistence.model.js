import {PersistenceStorage} from './persistence.storage';
import {Command} from '../command';

export class PersistenceModel {
	constructor() {
		this.items = [];
		this.storage = new PersistenceStorage(localStorage);
		this.load = new Command();
		this.remove = new Command();
		this.settings = {
			group: ['by'],
			sort: ['by'],
			pivot: ['by'],
			filter: ['by']
		};
	}
}