import Directive from '../directive';
import {STICKY_CORE_NAME, VIEW_CORE_NAME, VIEWPORT_CORE_NAME} from '../../../definition';
import Sticky from '../../../core/sticky/sticky';
import angular from 'angular';

class StickyCore extends Directive(STICKY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`, viewport: `^^${VIEWPORT_CORE_NAME}`}) {
	constructor($scope, $element, $attrs, $timeout, $window) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.$timeout = $timeout;
		this.$window = $window;
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

		// this.view.theme.changed.on(() => self.$timeout(() => sticky.invalidate()));
		const cloned = sticky[target];

		const originElement = angular.element(sticky.origin[target]);
		const clonedElement = angular.element(cloned);
		clonedElement.removeAttr(`q-grid-core:${target}`);
		originElement.after(clonedElement);
		originElement.css('visibility', 'hidden');

		const unwatches = [];
		unwatches.push(this.view.theme.changed.on(
			() => self.$timeout(() => sticky.invalidate())
		));

		unwatches.push(this.view.model.dataChanged.on(
			() => self.$timeout(() => sticky.invalidate())
		));

		unwatches.push(sticky.invalidated.on(
			() => self.$scope.$apply()
		));

		const onScroll = () => sticky.head.scrollLeft = sticky.scrollView.scrollLeft;
		sticky.scrollView.addEventListener('scroll', onScroll);

		const onResize = () => sticky.invalidate();
		this.$window.addEventListener('resize', onResize);

		this.$scope.$on('$destroy', () => {
			unwatches.forEach(u => u());
			sticky.scrollView.removeEventListener('scroll', onScroll);
			self.$window.removeEventListener('resize', onResize);
			sticky.destroy();
		});
	}
}

StickyCore.$inject = ['$scope',
	'$element',
	'$attrs',
	'$timeout',
	'$window'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$sticky',
	controller: StickyCore,
	require: StickyCore.require,
	link: StickyCore.link,
	scope: {}
};