Controller.$inject = ['$http', '$log', 'qgrid'];
export default function Controller($http, $log, qgrid) {

	this.model = qgrid.model();
	this.selection = [];
	this.rows = [];

	this.selectionChanged = (e) => {
		if (e.state.unit === 'cell' && e.state.mode === 'range' && e.state.items.length > 0) {
			const lastCell = e.state.items[e.state.items.length - 1];
			$log.log(`cell value: ${lastCell.column.value(lastCell.row)}`);
		}

		$log.log(`qgrid.demo: selection changed ${e.state.items.length} on ${e.state.unit} unit and ${e.state.mode} mode`);
	};

	this.model.dataChanged.watch((e) => {
		if (e.hasChanges('columns')) {
			if(e.state.columns.length > 0 && e.state.rows.length > 0) {
				const gender = e.state.columns.find(c => c.key === 'gender');
				this.selection = e.state.rows.slice(0, 4).map((row) => {
					return {
						row: row,
						column: gender
					};
				});
			}
		}
	});

	$http.get('data/people/100.json')
		.then((response) => {
			this.rows = response.data;
		});
}