Controller.$inject = ['$http', 'qgrid'];

export default function Controller($http, qgrid) {
	const model = qgrid.model();
	this.gridModel = model;
	this.selection = [];

	this.selectionChanged = e => {
		this.selection = e.state.items;
	};

	this.editRow = new qgrid.Command({
		execute: () => {
			alert('enter hit for: ' + this.selection[0].name.last);
		},
		canExecute: () => {
			return this.selection.length;
		},
		shortcut: 'enter'
	});

	this.gridModel.navigationChanged.on((e) => {
		if (e.hasChanges('cell')) {
			model.selection({items: [e.state.cell.row]});
		}
	});

	$http.get('data/people/100.json')
		.then((response) => {
			const rows = response.data;
			model
				.data({
					rows: rows
				})
				.focus({
					columnIndex: 0,
					rowIndex: 3
				});
		});
}