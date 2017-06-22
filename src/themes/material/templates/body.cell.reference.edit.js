import {isArray, noop} from '@grid/core/utility';
import {Command} from '@grid/core/infrastructure';
import {SelectionService} from '@grid/core/selection';

ReferenceEdit.$inject = ['$scope', 'qgrid', 'qGridPopupService'];
export default function ReferenceEdit($scope, qgrid, popupService) {
	this.cell = () => $scope.$editor || $scope.$view.edit.cell;

	const id = 'q-grid-reference-edit';
	const close = () => {
		if ($scope.$popup && popupService.isOpened(id)) {
			$scope.$popup.close();
		}
	};

	const options = this.cell().options;
	this.gridModel = (options
		&& options.modelFactory
		&& options.modelFactory($scope.$view ? $scope.$view.model.navigation() : {}))
		|| qgrid.model();

	const watchSelection = e => {
		if (e.hasChanges('items')) {
			const model = this.gridModel;
			const selectionItems = model.selection().items;
			const entries = new SelectionService(model).lookup(selectionItems);

			const cell = this.cell();
			cell.value = selectionItems;
			cell.tag = {
				entries: entries,
				columns: model.data().columns
			};
		}
	};

	const dataChangedOff = this.gridModel.dataChanged.watch(e => {
		if (e.hasChanges('rows') && e.state.rows.length > 0) {
			const cell = this.cell();
			this.gridModel.selection({
				items: isArray(cell.value) ? cell.value : [cell.value]
			});

			this.gridModel.selectionChanged.watch(watchSelection);

			dataChangedOff();
		}
	});

	const commands = {
		commit: new Command({
			shortcut: 'ctrl+s',
			execute: ($cell, $event) => {
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

	this.commit = commands.commit;

	this.cancel = commands.cancel;

	const shortcutOff = popupService.isOpened(id)
		? $scope.$popupBody.shortcut.register('referenceEditManagement', new Map(
			Object.entries(commands)
		))
		: noop;

	$scope.$on('$destroy', () => {
		shortcutOff();
		close();
	});
}