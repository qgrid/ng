export default class ViewModel {
	constructor() {
		this.items = [];
		this.rows = [];
		this.columns = [];
		this.nodes = [];
		this.rowDetails = [];
		this.pivot = {heads: [], rows: []};
	}
}