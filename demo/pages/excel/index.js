Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const model = qgrid.model();
	this.model = model;
	model.scroll({
		mode: 'virtual'
	});
}