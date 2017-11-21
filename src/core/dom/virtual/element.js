import {FakeClassList} from '../fake/class.list';

export class VirtualElement {
	constructor(rect) {
		this.classList = new FakeClassList();
		this.rect = rect;
	}

	getBoundingClientRect() {
		return this.rect;
	}

	get clientWidth() {
		return this.rect.width;
	}

	get clientHeight() {
		return this.rect.height;
	}
}