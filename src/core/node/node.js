export default class Node {
	constructor(key) {
		this.key = key;
		this.rows = [];
		this.children = [];
		this.state = {
			expand: false
		};
	}
}