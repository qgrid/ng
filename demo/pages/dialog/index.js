import DialogController from './dialog';

Controller.$inject = ['$mdDialog'];
export default function Controller($mdDialog) {
	const ctrl = this;

	ctrl.showDialog = event => {
		$mdDialog.show({
			bindToController: true,
			controller: DialogController,
			controllerAs: '$ctrl',
			template: require('./dialog.html'),
			targetEvent: event,
			clickOutsideToClose: false
		});
	};
}