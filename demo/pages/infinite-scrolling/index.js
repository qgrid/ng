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
		pipe: qgrid.pipeUnit.virtual(
			(data, context, next) => {
				$http.get('data/people/1000.json')
					.then(response => next(data));
			}
		)
	});
}