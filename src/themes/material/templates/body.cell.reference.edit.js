ReferenceEdit.$inject = ['$scope', 'qgrid'];
export default function ReferenceEdit($scope, qgrid) {
	this.gridModel = qgrid.model();
	this.commit = ($cell, $event) => {
		$scope.$view.edit.cell.value = this.gridModel.selection().items;
		$scope.$view.edit.cell.commit.execute($cell, $event);
	}
}