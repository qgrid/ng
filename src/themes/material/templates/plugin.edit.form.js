import {Command} from '@grid/core/infrastructure';

EditFormPlugin.$inject = ['$scope'];
export default function EditFormPlugin($scope) {
	this.editForm = () => $scope.$editForm;

	const close = () => {
		if (this.$popupBody) {
			this.$popupBody.close();
		}
	};

	this.commands = {
		submit: new Command({
			shortcut: 'ctrl+s',
			execute: () => {
				this.editForm().submit.execute();
				close();
			}
		}),
		cancel: new Command({
			shortcut: 'Escape',
			execute: () => {
				this.editForm().cancel.execute();
				close();
			}
		})
	};

	$scope.$on('$destroy', () => {
		close();
	});
}