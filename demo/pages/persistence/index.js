Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;

	this.rows = [];

	this.gridModel = qgrid.model();
	const persistence = this.gridModel.persistence;
	const storage = persistence().storage;
	persistence({
		storage: {
			getItem: id => {
				return new Promise(resolve => {
					storage.getItem(id)
						.then(myPresets => {
							$http.get('data/presets.json')
								.then(response => {
									const presets = response.data;
									const allPresets = presets.concat(myPresets || []);
									resolve(allPresets);
								});
						});
				});
			},
			setItem: storage.setItem.bind(storage)
		},
		load: new qgrid.Command({
			execute: () => alert('load')
		})
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}