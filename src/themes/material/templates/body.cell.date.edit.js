import {Command} from '@grid/core/command';

DateEdit.$inject = ['$scope'];
export default function DateEdit($scope) {
	this.pickerOpened = false;

	this.cell = () => $scope.$editor || $scope.$view.edit.cell;

	this.openPicker =
		new Command({
			shortcut: 'Enter',
			execute: () => {
				this.pickerOpened = true;
			}
		});

	const model = this.cell().model();
	const shortcut = model.action().shortcut;

	const shortcutOff = shortcut.register(
		this.cell().commandManager,
		[this.openPicker]
	);

	$scope.$on('$destroy', () => {
		shortcutOff();
	});
}