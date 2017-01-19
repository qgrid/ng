'use strict';

import Directive from '../directive';
import {GRID_NAME, HEAD_NAME} from '../../definition';
import Sticky from '../../core/head/head.sticky';

class Head extends Directive(HEAD_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($scope, $element, $window, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$window = $window;
		this.$timeout = $timeout;
	}

	onInit() {
		const self = this;
		const head = this.root.model.head();
		if (!head.sticky || this.$element.hasClass('sticky')) {
			return;
		}

		const origin = this.$element[0];
		const sticky = new Sticky(origin);
		const header = sticky.header;

		const headerElement = angular.element(header);
		headerElement.removeAttr('q-grid:core-head');
		this.$element.after(headerElement);
		this.$element.css('visibility', 'hidden');

		this.$scope.$watch(
			() => self.$window.getComputedStyle(origin).width,
			() => self.$timeout(() => sticky.invalidate(), 0));

		this.$scope.$on('$destroy', () => {
			header.remove();
		});
	}
}

Head.$inject = ['$scope', '$element', '$window', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: Head,
	require: Head.require,
	link: Head.link
};