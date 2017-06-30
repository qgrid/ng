Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const src = 'data/people/100.json';

	this.model = qgrid.model();
	this.selection = [];
	this.masterRows = [];
	this.detailsRows = [];

	this.likes = [];

	this.selectionChanged = (e) => {
		this.selection = e.state.items;
		if (this.selection.length) {
			const likes = this.selection[0].likes;
			this.likes = likes;
			$http.get(src)
				.then(response => {
					const filter = r => {
						return likes.every(like => r.likes.indexOf(like) >= 0);
					};
					this.detailsRows = response.data.filter(filter);
				});
		}
		else {
			this.detailsRows = [];
		}
	};

	$http.get(src)
		.then(response => {
			this.masterRows = response.data;
		});
}