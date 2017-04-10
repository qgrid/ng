export default class RowDetailsNode {
	constructor(row, type = 'row') {
		this.row = row;
		this.type = type;
		this.state = {
			expand: false
		};
	}
}