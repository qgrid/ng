'use strict';

import Directive from '../directive';
import {GRID_NAME, STICKY_CORE_NAME, VIEW_CORE_NAME} from '../../definition';
import Sticky from '../../core/head/head.sticky';
import {debounce} from '../../core/services/utility';
import angular from 'angular';

class StickyCore extends Directive(STICKY_CORE_NAME, {root: `^^${GRID_NAME}`, view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $rootScope) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$rootScope = $rootScope;
	}

	onInit($attrs) {
		const model = this.root.model;
		model[$attrs[STICKY_CORE_NAME] + 'Changed']
			.on(e => {
				if (e.changes.hasOwnProperty('sticky')) {
					this.apply();
				}
			});

		if (model[$attrs[STICKY_CORE_NAME]]().sticky) {
			this.apply();
		}
	}

	apply() {
		if (this.$element.hasClass('sticky')) {
			return;
		}

		const table = this.$element[0];
		const scrollView = this.view.$element[0];
		const sticky = new Sticky(table, scrollView);
		const header = sticky.header;

		const originElement = angular.element(sticky.origin);
		const headerElement = angular.element(header);
		headerElement.removeAttr('q-grid:core-head');
		originElement.after(headerElement);
		originElement.css('visibility', 'hidden');

		const invalidateSome = debounce(() => {
			sticky.invalidate();
			this.$scope.$apply();
		}, 100);

		this.$rootScope.$watch(function () {
			invalidateSome();
			return 1;
		}, angular.noop());

		this.$scope.$on('$destroy', () => {
			sticky.destroy();
		});
	}

}

StickyCore.$inject = ['$scope',
	'$element',
	'$rootScope'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$sticky',
	controller: StickyCore,
	require: StickyCore.require,
	link: StickyCore.link
};