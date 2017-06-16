import {Command} from '@grid/core/infrastructure';

EditFormPlugin.$inject = ['$scope', 'qGridPopupService'];
export default function EditFormPlugin($scope, popupService) {
	const id = `q-grid-edit-form-popup-${$scope.$editForm.key}`;

	const close = () => {
		if ($scope.$popupBody && popupService.isOpened(id)) {
			$scope.$popupBody.close();
		}
	};

	const commands = {
		submit: new Command({
			shortcut: 'ctrl+s',
			execute: () => {
				$scope.$editForm.submit.execute();
				close();
			}
		}),
		cancel: new Command({
			shortcut: 'Escape',
			execute: () => {
				$scope.$editForm.cancel.execute();
				close();
			}
		})
	};
	popupService.commands(id, commands);

	this.submit = commands.submit;
	this.cancel = commands.cancel;

	$scope.$on('$destroy', () => {
		close();
	});
}