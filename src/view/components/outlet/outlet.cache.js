export class OutletCache {
	constructor() {
		this.cache = new Map();
	}

	get(key) {
		return this.cache.get(key);
	}

	put(key, value) {
		this.cache.set(key, value);
	}
}
