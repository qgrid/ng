Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const model = qgrid.model();

	ctrl.model = model;

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

			$http.get('data/people/1000.json')
				.then(response =>
					next(response.data.slice(start, start + size)));
		}]
			.concat(qgrid.pipeUnit.view)
	});
}