export default class Middleware {

	constructor(stages) {
		this.stages = stages || [];
	}

	run(ctx, data = []) {
		return pipeline(
			this.stages.map(s => data => new Promise(resolve => {
				s(data, ctx, resolve);
			})),
			data);
	}
}

function pipeline(stages, initialData) {
	let index = 0;

	return new Promise((resolve, reject) => {
		invoke(initialData);

		function invoke(data) {
			let stage = stages[index++];
			let p = stage(data);

			p.then(function (data) {
				if (index < stages.length) {
					invoke(data);
				} else {
					resolve(data);
				}
			}).catch((e) => {
				reject(e);
			});
		}
	});
}
