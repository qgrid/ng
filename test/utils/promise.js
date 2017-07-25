class FinallyPromise extends Promise {
	constructor(fn) {
		super(fn);
	}

	static all(tasks) {
		return new FinallyPromise((resolve, reject) => {
			Promise.all(tasks).then(resolve).catch(reject);
		});
	}

	static sequence(tasks) {
		return new FinallyPromise((resolve, reject) => {
			if (tasks.length) {
				console.log(`Tasks length is ${tasks.length}`);
				const task = tasks[0];
				task()
					.then(() => FinallyPromise.sequence(tasks.slice(1)))
					.then(() => resolve())
					.catch(e => reject(e));
			} else {
				console.log(`Tasks queue is finished ${tasks.length}`);
				resolve();
			}
		});
	}

	finally(fn) {
		return this
			.then(fn)
			.catch(fn);
	}
}

module.exports = FinallyPromise;