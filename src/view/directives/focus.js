import Directive from './directive';
import {FOCUS_NAME} from '@grid/view/definition';
import {AppError} from '@grid/core/infrastructure';

class Focus extends Directive(FOCUS_NAME) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
	}

	onInit() {
		let element = this.$element[0];

		const targetName = this.$attrs[FOCUS_NAME];
		if (targetName !== '') {
			const target = this.$element.find(targetName);
			if (target.length > 0) {
				element = target[0];
			}
			else {
				throw new AppError('focus', `Element "${targetName}" is not found`);
			}
		}

		if (element.getAttribute('tabindex') === null
			|| element.getAttribute('tabindex') !== '') {
			element.setAttribute('tabindex', -1);
		}

		this.$scope.$evalAsync(() => element.focus());
	}
}

Focus.$inject = ['$scope', '$element', '$attrs'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$focus',
	controller: Focus,
	require: Focus.require,
	link: Focus.link,
	scope: false
};