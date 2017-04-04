import {noop} from 'core/services/utility';

export default class ScrollModel {
	constructor() {
		this.y = {
			threshold: 20,
			fetch: noop
		};

		this.x = {
			threshold: 10,
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