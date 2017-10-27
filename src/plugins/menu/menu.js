import Directive from '../../view/directives/directive';
import {MENU_NAME} from '../definition';

class Menu extends Directive(MENU_NAME) {
	constructor($scope) {
		super();

		this.$scope = $scope;
		this.isOpened = false;
	}

	onInit() {
		this.$scope.$on(`${this.menu}Close`, () => {
			this.onClose();
			this.isOpened = false;
		});

		this.$scope.$on(`${this.menu}Open`, () => {
			this.onOpen();
			this.isOpened = true;
		});
	}
}

Menu.$inject = ['$scope'];

export default {
	restrict: 'A',
	controller: Menu,
	controllerAs: '$menu',
	require: Menu.require,
	link: Menu.link,
	scope: false,
	bindToController: {
		'menu': `@${MENU_NAME}`,
		'onOpen': '&',
		'onClose': '&'
	}
};