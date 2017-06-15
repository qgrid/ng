import {Command} from '@grid/core/infrastructure';

EditFormPlugin.$inject = ['$scope', 'qGridPopupService'];
export default function EditFormPlugin($scope, popupService) {
	let closed = false;
	const close = () => {
		if ($scope.$popupBody && !closed) {
			$scope.$popupBody.close();
			closed = true;
		}
	};

	this.commands = {
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

	const id = `q-grid-edit-form-popup-${$scope.$editForm.key}`;
	popupService.commands(id, this.commands);

	$scope.$on('$destroy', () => {
		close();
	});
}