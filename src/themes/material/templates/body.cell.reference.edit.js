ReferenceEdit.$inject = ['$scope', 'qgrid'];
export default function ReferenceEdit($scope, qgrid) {
	this.cell = () => $scope.$view.edit.cell;

	const options =  this.cell().options();
	this.gridModel = (options && options.modelFactory && options.modelFactory()) ||  qgrid.model();
	const service = qgrid.service(this.gridModel);

	this.commit = ($cell, $event) => {
		this.cell().value = this.gridModel.selection().items;
		this.cell().commit.execute($cell, $event);
	};

	const fetch = this.cell().fetch;
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
	else if (fetch.result) {
		this.gridModel.data({
			rows: fetch.result
		});
	}
}