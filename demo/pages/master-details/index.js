Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {

	this.model = qgrid.model();
	this.selection = [];
	this.rows = [];
	this.columns = [];
	this.selectionChanged = (e) => {
		this.selection = e.state.items;
		this.columns = this.model.data().columns;
		// const column = this.columns.find(c => c.key === 'likes');
		this.model.filter({by: {'likes': ['chatting']}});
		const filterBy = this.model.filter().by;
		console.log(filterBy, this.model.filter());
		// // filter.by['likes'] = {items:items};
	};

	$http.get('data/people/10.json')
		.then(response => {
			this.rows = response.data;
		});
	this.selectionKey = {
		row: row => `row ${this.rows.indexOf(row)}`,
		column: column => column.key,
	};

}