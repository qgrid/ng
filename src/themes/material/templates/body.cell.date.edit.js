import {Shortcut, Command} from '@grid/core/infrastructure';

DateEdit.$inject = ['$scope'];
export default function DateEdit($scope) {
	this.pickerOpened = false;

	this.cell = () => $scope.$editor || $scope.$view.edit.cell;

	const commands = {
		openPicker: new Command({
			shortcut: 'Enter',
			execute: () => {
				this.pickerOpened = true;
			}
		})
	};

	const shortcut = new Shortcut(this.cell().commandManager);
	const shortcutOff = shortcut.register('dateEditCellManagement', new Map(
		Object.entries(commands)
	));

	$scope.$on('$destroy', () => {
		shortcutOff();
	});
}