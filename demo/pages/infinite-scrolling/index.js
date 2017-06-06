Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const model = qgrid.model();
	let rows = [];

	ctrl.model = model;

	model.pagination({
		size: 20
	});

	model.scroll({
		mode: 'virtual'
	});

	ctrl.model.data({
		pipe: [(data, context, next) => {
			const skip = model.fetch().skip;
			const take = model.pagination().size;

			$http.get('data/people/100.json')
				.then(response =>
					next(rows = rows.concat(response.data.slice(skip, skip + take))));
		}]
			.concat(qgrid.pipeUnit.view)
	});
}