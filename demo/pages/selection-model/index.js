Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selection = [];
	this.rows = [];

	this.selectionChanged = function (e) {
		$log.log(`qgrid.demo: selection changed ${e.state.items.length} on ${e.state.unit} unit and ${e.state.mode} mode`);
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
			ctrl.selection = response.data.slice(0, 4);
		});
}