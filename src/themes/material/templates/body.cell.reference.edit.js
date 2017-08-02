import {isArray, noop} from '@grid/core/utility';
import {Command} from '@grid/core/command';
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

	const contextFactory = (cell, value, label, tag) => ({
		column: cell.column,
		row: cell.row,
		columnIndex: cell.columnIndex,
		rowIndex: cell.rowIndex,
		oldValue: cell.value,
		newValue: arguments.length >= 2 ? value : cell.value,
		oldLabel: cell.label,
		newLabel: arguments.length >= 3 ? label : cell.label,
		unit: 'cell',
		tag: tag
	});

	this.gridModel.dataChanged.watch((e, off) => {
		if (e.hasChanges('rows') && e.state.rows.length > 0) {
			off();
			const cell = this.cell();
			const model = this.gridModel;
			if (!model.selection().items.length) {
				model.selection({
					items: isArray(cell.value) ? cell.value : [cell.value]
				});
			}

			model.selectionChanged.watch(watchSelection);
		}
	});

	const shortcutFactory = (type) => {
		const edit = this.gridModel.edit;
		return () => {
			const shortcuts = edit()[type + 'Shortcuts'];
			return shortcuts['form'] || shortcuts['$default'];
		};
	};

	const commands = {
		commit: new Command({
			shortcut: shortcutFactory('commit'),
			execute: ($cell, $event) => {
				const cellView = this.cell();
				const context = contextFactory($cell, cellView.value, cellView.label, cellView.tag);

				if (cellView.commit.execute($cell, $event) === false) {
					return;
				}

				if (options &&
					options.commit &&
					(!options.commit.canExecute(context) ||
					options.commit.execute(context) === false)) {
					return;
				}

				close();
			}
		}),
		cancel: new Command({
			shortcut: shortcutFactory('cancel'),
			execute: ($cell, $event) => {
				const cellView = this.cell();
				const context = contextFactory($cell, cellView.value, cellView.label, cellView.tag);

				if (cellView.cancel.execute($cell, $event) === false) {
					return;
				}

				if (options && options.cancel &&
					(!options.cancel.canExecute(context) ||
					options.cancel.execute(context) === false)) {
					return;
				}

				close();
			}
		})
	};

	this.commit = commands.commit;

	this.cancel = commands.cancel;
	const shortcutOff = popupService.isOpened(id)
		? $scope.$popupBody.shortcut.register(new Map(Object.entries(commands)))
		: noop;

	$scope.$on('$destroy', () => {
		shortcutOff();
		close();
	});
}