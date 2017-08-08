export class Event {
	constructor(e = () => null) {
		this.handlers = [];
		this.isDirty = false;
		this.e = e;
	}

	on(f, source = 'user') {
		const handlers = this.handlers;
		const handler = {f: f};
		const off = () => {
			const index = handlers.indexOf(handler);
			if (index >= 0) {
				handlers.splice(index, 1);
			}
		};

		handler.off = off;
		handler.source = source
		handlers.push(handler);
		return off;
	}

	watch(f, source = 'user') {
		const off = this.on(f, source);
		if (this.isDirty) {
			f(this.e(), off);
		}

		return off;
	}

	emit(e) {
		this.isDirty = true;
		const temp = Array.from(this.handlers);
		for (let i = 0, length = temp.length; i < length; i++) {
			const handler = temp[i];
			handler.f(e, handler.off);
		}
	}

	free(source = null) {
		const temp = Array.from(this.handlers);
		for (let i = 0, length = temp.length; i < length; i++) {
			const handler = temp[i];
			if (!source || handler.source === source) {
				handler.off();
			}
		}
	}
}