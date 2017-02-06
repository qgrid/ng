Controller.$inject = ['$http', '$log'];
export default function Controller($http, $log) {
	const ctrl = this;

	this.selection = [];
	this.rows = [];
	this.selectionMode = 'check';
	
	this.selectionChanged = function (e) {
		$log.log(`qgrid.demo: selection changed ${e.state.items.length} on ${e.state.mode} mode`);
	};

	this.selectAll = () => {
		ctrl.selection = ctrl.rows;
	};

	this.selectTop10 = () => {
		ctrl.selection = ctrl.rows.slice(0, 10);
	};

	this.deselectAll = () => {
		ctrl.selection = [];
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
			ctrl.selection = response.data.slice(0, 4);
		});
}