Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {

	this.model = qgrid.model();
	this.selection = [];
	this.rows = [];
	this.selectionChanged = (e) => {
		this.selection = e.state.items;
	};

	$http.get('data/people/10.json')
		.then(response => {
			this.rows = response.data;
		});
}