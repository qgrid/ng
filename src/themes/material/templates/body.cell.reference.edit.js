import {isArray} from '@grid/core/utility';
import {Command} from '@grid/core/infrastructure';

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

	this.commands = {
		commit: new Command({
			shortcut: 'ctrl+s',
			execute: ($cell, $event) => {
				this.cell().value = this.gridModel.selection().items;
				this.cell().tag = {
					entries: this.gridModel.selection().entries,
					schema: this.gridModel.data().columns
				};
				this.cell().commit.execute($cell, $event);
				close();
			}
		}),
		cancel: new Command({
			shortcut: 'Escape',
			execute: ($cell, $event) => {
				this.cell().cancel.execute($cell, $event);
				close();
			}
		})
	};

	this.test = (smth) => alert(smth);

	$scope.$on('$destroy', () => {
		close();
	});
}