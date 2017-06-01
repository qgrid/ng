Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const model = qgrid.model();
	let rows = [];

	ctrl.model = model;
	ctrl.selection = () => model.selection().items;

	model.pagination({
		size: 20
	});

	model.scroll({
		mode: 'virtual'
	});

	ctrl.model.data({
		pipe: [(data, context, next) => {
			const paginationState = model.pagination();
			const size = paginationState.size;
			const current = paginationState.current;
			const start = current * size;

			$http.get('data/people/100.json')
				.then(response =>
					next(rows = rows.concat(response.data.slice(start, start + size))));
		}]
			.concat(qgrid.pipeUnit.view)
	});
}