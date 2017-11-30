Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const model = qgrid.model();
	let rows = [];

	ctrl.model = model;
	ctrl.selection = () => model.selection().items;

	model
		.pagination({
			size: 20
		})
		.scroll({
			mode: 'virtual'
		});

	ctrl.model.data({
		pipe: [(data, context, next) => {
			const skip = model.fetch().skip;
			const take = model.pagination().size;

			$http.get('data/people/100.json')
				.then(response => {
					const newPage = response.data.slice(skip, skip + take);
					rows = rows.concat(newPage);
					next(rows);
				});
		}]
			.concat(qgrid.pipeUnit.view)
	});
}