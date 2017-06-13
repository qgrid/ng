Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	qgrid.model().scroll({
		mode: 'virtual'
	});
}