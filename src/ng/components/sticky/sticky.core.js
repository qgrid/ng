import Directive from '../directive';
import {STICKY_CORE_NAME, VIEW_CORE_NAME, VIEWPORT_CORE_NAME} from '../../../definition';
import Sticky from '../../../core/sticky/sticky';
import angular from 'angular';

class StickyCore extends Directive(STICKY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`, viewport: `^^${VIEWPORT_CORE_NAME}`}) {
	constructor($scope, $element, $attrs, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.$timeout = $timeout;
	}

	onInit() {
		const model = this.view.model;
		const target = this.$attrs[STICKY_CORE_NAME];

		if (!model.hasOwnProperty(target)) {
			throw new Error(
				'sticky',
				`Appropriate model for "${target}" is not found`);
		}

		model[target + 'Changed']
			.on(e => {
				if (e.changes.hasOwnProperty('sticky')) {
					this.apply();
				}
			});

		if (model[target]().sticky) {
			this.apply(target);
		}
	}

	apply(target) {
		if (this.$element.hasClass('sticky')) {
			return;
		}

		const self = this;
		const table = this.$element[0];
		const scrollView = this.viewport.$element[0];
		const sticky = new Sticky(table, scrollView);

		this.view.theme.changed.on(() => self.$timeout(() => sticky.invalidate()));

		sticky.invalidated.on(() => self.$scope.$apply());

		this.$scope.$on('$destroy', () => sticky.destroy());

		const cloned = sticky[target];

		const originElement = angular.element(sticky.origin[target]);
		const clonedElement = angular.element(cloned);
		clonedElement.removeAttr(`q-grid-core:${target}`);
		originElement.after(clonedElement);
		originElement.css('visibility', 'hidden');
	}
}

StickyCore.$inject = ['$scope', '$element', '$attrs', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$sticky',
	controller: StickyCore,
	require: StickyCore.require,
	link: StickyCore.link
};