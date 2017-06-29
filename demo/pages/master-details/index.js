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
						const likes = r.likes;
						if (likes.length !== selection.length) {
							return false;
						}
						for (let i = likes.length; i--;) {
							if (likes[i] !== selection[i])
								return false;
						}

						return true;
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