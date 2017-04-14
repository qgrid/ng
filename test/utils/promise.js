class FinallyPromise extends Promise {
	constructor(fn) {
		super(fn);
	}

	static all(tasks) {
		return new FinallyPromise((resolve, reject) => {
			Promise.all(tasks).then(resolve).catch(reject);
		});
	}

	finally(fn) {
		return this
			.then(fn)
			.catch(fn);
	}
}

module.exports = FinallyPromise;