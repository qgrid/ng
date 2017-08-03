import {Resource} from '@grid/core/resource';
import {identity} from '@grid/core/utility';

export default class DataManipulationModel {
	constructor() {
		this.resource = new Resource();

		this.deleted = new Set();
		this.added = new Set();
		this.edited = new Map();

		this.rowFactory = () => undefined;
		this.rowId = identity;
	}
}