export default class Node {
	constructor(key, level = 0) {
		this.key = key;
		this.level = level;
		this.rows = [];
		this.children = [];
		this.state = {
			expand: false
		};
	}
}