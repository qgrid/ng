import * as css from 'core/services/css';

class Element {
	constructor(element) {
		this.element = element;
		this.oldList = {};
		this.newList = {};
	}

	class(key, style) {
		key = css.escape(key);
		this.newList[key] = style;
	}
}

export class Monitor {
	constructor(model) {
		this.model = model;
		this.map = new Map();
	}

	add(element) {
		this.map.set(element, null);
	}

	delete(element) {
		this.map.delete(element);
	}

	enter(element) {
		let entry = this.map.get(element);
		if (entry) {
			entry.oldList = entry.newList;
			entry.newList = {};
		}
		else {
			entry = new Element(element);
			this.map.set(element, entry);
		}

		return entry;
	}

	exit(entry) {
		const classList = entry.element.classList;
		const newList = entry.newList;
		for (let [cls, style] of Object.entries(entry.oldList)) {
			if (!newList.hasOwnProperty(cls)) {
				classList.remove(cls);
				if (style) {
					const sheet = css.sheet(`${this.model.grid().id}-${cls}`);
					sheet.remove();
				}
			}
		}

		for (let [cls, style] of Object.entries(newList)) {
			if (!classList.contains(cls)) {
				classList.add(cls);
				if (style) {
					const sheet = css.sheet(`${this.model.grid().id}-${cls}`);
					sheet.set({[`.${cls}`]: style});
				}
			}
		}
	}
}