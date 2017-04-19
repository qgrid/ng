ReferenceEdit.$inject = ['$scope', 'qgrid'];
export default function ReferenceEdit($scope, qgrid) {
	this.gridModel = qgrid.model();
	const service = qgrid.service(this.gridModel);

	this.commit = ($cell, $event) => {
		$scope.$view.edit.cell.value = this.gridModel.selection().items;
		$scope.$view.edit.cell.commit.execute($cell, $event);
	};

	const fetch = $scope.$view.edit.cell.fetch;
	if (fetch.busy) {
		const cancelBusy = service.busy();
		fetch.busy
			.then(() => {
				this.gridModel.data({
					rows: fetch.result
				});
				cancelBusy();
			});
	}
	else {
		this.gridModel.data({
			rows: fetch.result
		});
	}
}