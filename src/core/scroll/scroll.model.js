import {noop} from 'core/services/utility';

export default class ScrollModel {
	constructor() {
		this.mode = 'default';

		this.top = 0;
		this.left = 0;
		this.width = 0;
		this.height = 0;

		this.y = {
			threshold: 30,
			fetch: noop
		};

		this.x = {
			threshold: 30,
			fetch: noop
		};
	}
}