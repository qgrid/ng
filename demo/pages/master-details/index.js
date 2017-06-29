Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {

	this.model = qgrid.model();

	this.selection = [];
	this.masterRows = [];
	this.detailsRows = [];

	this.likes = [];

	this.selectionChanged = (e) => {
		this.selection = e.state.items;
		if (this.selection.length) {
			const selection = this.selection[0].likes;
			this.likes = selection;
			$http.get('data/people/10.json')
				.then(response => {
					const detailsRows = response.data.filter(r => {
						return selection.every(val => r.likes.indexOf(val) >= 0);
					});
					this.detailsRows = detailsRows;
				});
		}
	};

	$http.get('data/people/10.json')
		.then(response => {
			this.masterRows = response.data;
		});
}