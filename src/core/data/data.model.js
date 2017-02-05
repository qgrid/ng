export default class DataModel {
	constructor() {
		this.rows = [];
		this.columns = [];
		this.pipe = [];
		this.triggers = ['pagination', 'sort', 'filter'];
	}
}