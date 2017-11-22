import {isArray, noop} from '@grid/core/utility';
import {Command} from '@grid/core/command';
import {SelectionService} from '@grid/core/selection';

ReferenceEdit.$inject = ['$scope', 'qgrid', 'qGridPopupService'];
export default function ReferenceEdit($scope, qgrid, popupService) {
	const editView = () => $scope.$editor || $scope.$view.edit.cell;

	const id = 'q-grid-reference-edit';
	const close = () => {
		if ($scope.$popup && popupService.isOpened(id)) {
			$scope.$popup.close();
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

	const options = editView().options;
	this.gridModel = (options
		&& options.modelFactory
		&& options.modelFactory(editView()))
		|| qgrid.model();

	const watchSelection = e => {
		if (e.hasChanges('items')) {
			const model = this.gridModel;
			const selectionItems = model.selection().items;
			const entries = new SelectionService(model).lookup(selectionItems);

			const view = editView();
			view.value = selectionItems;
			view.tag = {
				entries: entries,
				columns: model.data().columns
			};
		}
	};

	this.gridModel.dataChanged.watch((e, off) => {
		if (e.hasChanges('rows') && e.state.rows.length > 0) {
			off();
			const view = editView();
			const model = this.gridModel;
			if (!model.selection().items.length) {
				model.selection({
					items: isArray(view.value) ? view.value : [view.value]
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
			source: 'body.cell.reference.edit',
			shortcut: shortcutFactory('commit'),
			execute: ($cell, $event) => {
				const view = editView();
				const cell = $cell || view.editor.cell;
				const context = contextFactory(cell || view.cell, view.value, view.label, view.tag);
				if (view.commit.execute(cell, $event) === false) {
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
			source: 'body.cell.reference.edit',
			shortcut: shortcutFactory('cancel'),
			execute: ($cell, $event) => {
				const view = editView();
				const cell = $cell || view.editor.cell;
				const context = contextFactory(cell, view.value, view.label, view.tag);
				if (view.cancel.execute(cell, $event) === false) {
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