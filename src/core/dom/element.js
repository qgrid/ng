export class Element {
	constructor() {
	}

	rect() {
		return {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		};
	}

	addClass() {
	}

	removeClass() {
	}

	get width() {
		return 0;
	}

	get height() {
		return 0;
	}

	get scroll() {
		return {
			top: 0,
			left: 0
		}
	}
}