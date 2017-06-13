import {isArray} from '@grid/core/utility';

ReferenceEdit.$inject = ['$scope', 'qgrid'];
export default function ReferenceEdit($scope, qgrid) {
	this.cell = () => $scope.$editor || $scope.$view.edit.cell;

	let closed = false;
	const close = () => {
		if ($scope.$popup && !closed) {
			$scope.$popup.close();
			closed = true;
		}
	};

	const options = this.cell().options;
	this.gridModel = (options
		&& options.modelFactory
		&& options.modelFactory($scope.$view ? $scope.$view.model.navigation() : {}))
		|| qgrid.model();

	const dataChangedOff = this.gridModel.dataChanged.watch(e => {
		if (e.hasChanges('rows') && e.state.rows.length > 0) {
			const cell = this.cell();
			this.gridModel.selection({
				items: isArray(cell.value) ? cell.value : [cell.value]
			});

			dataChangedOff();
		}
	});

	this.commit = ($cell, $event) => {
		const cell = this.cell();
		cell.value = this.gridModel.selection().items;
		cell.tag = {
			columns: this.gridModel.data().columns
		};
		cell.commit.execute($cell, $event);
		close();
	};

	this.cancel = ($cell, $event) => {
		this.cell().cancel.execute($cell, $event);
		close();
	};

	$scope.$on('$destroy', () => {
		close();
	});
}