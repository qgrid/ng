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

function pipeline(stages, rows) {
	let index = 0;

	return new Promise((resolve, reject) => {
		invoke(rows);

		function invoke(rows) {
			let stage = stages[index++];
			let p = stage(rows);

			p.then(function (rows) {
				if (index < stages.length) {
					invoke(rows);
				} else {
					resolve(rows);
				}
			}).catch(e => {
				reject(e);
			});
		}
	});
}
