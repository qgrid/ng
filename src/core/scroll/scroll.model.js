import {noop} from 'core/services/utility';

export default class ScrollModel {
	constructor() {
		this.mode = 'default';

		this.y = {
			threshold: 30,
			fetch: noop
		};

		this.x = {
			threshold: 30,
			fetch: noop
		};

		this.position = {
			top: 0,
			left: 0,
			width: 0,
			height: 0
		};
	}
}