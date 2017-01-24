export default class Event {
	constructor() {
		this.handlers = [];
	}

	on(f) {
		const handlers = this.handlers;
		handlers.push(f);
		return () => {
			const index = handlers.indexOf(f);
			if (index >= 0) {
				handlers.splice(index, 1);
			}
		};
	}

	emit(e) {
		const temp = this.handlers.slice();
		for (let i = 0, length = temp.length; i < length; i++) {
			temp[i](e);
		}
	}
}