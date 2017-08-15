Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const emptyModel = qgrid.model().grid({id: 'grid empty'});
	ctrl.gridModel = emptyModel;
	const models = [qgrid.model(), qgrid.model()];
	ctrl.setModel = index => ctrl.gridModel = models[index] || emptyModel;

	models[0].grid({id: 'grid 1'}).columnList({generation: 'deep'});
	models[1].grid({id: 'grid 2'}).columnList({generation: 'shallow'}).pagination({size: 10});

	$http.get('data/people/100.json')
		.then(function (response) {
			for (let model of models) {
				model.data({rows: Array.from(response.data)});
			}
		});
}