import Directive from '../directive';
import {STICKY_CORE_NAME, VIEW_CORE_NAME, VIEWPORT_CORE_NAME,
	TABLE_CORE_NAME, HEAD_CORE_NAME, FOOT_CORE_NAME} from 'src/definition';
import AppError from 'core/infrastructure/error';
import StickyFactory from 'core/sticky/sticky.factory';
import angular from 'angular';

class StickyCore extends Directive(STICKY_CORE_NAME, {
	view: `^^${VIEW_CORE_NAME}`,
	viewport: `^^${VIEWPORT_CORE_NAME}`,
	table: `^^${TABLE_CORE_NAME}`,
	head: `?${HEAD_CORE_NAME}`,
	foot: `?${FOOT_CORE_NAME}`
}) {
	constructor($scope, $element, $attrs, $timeout, $window, $compile) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.$timeout = $timeout;
		this.$window = $window;
		this.$compile = $compile;
	}

	onInit() {
		const model = this.view.model;
		const target =
			this.head ? 'head' :
				this.foot ? 'foot' : null;

		if (target === null) {
			return;
		}

		if (!model.hasOwnProperty(target)) {
			throw new AppError(
				'sticky',
				`Appropriate model for "${target}" is not found`);
		}

		model[target + 'Changed']
			.on(e => {
				if (e.changes.hasOwnProperty('sticky')) {
					this.apply(target);
				}
			});

		const self = this;
		if (model[target]().sticky) {
			this.$timeout(() => self.apply(target));
		}
	}

	apply(target) {
		if (this.$element.hasClass('sticky')) {
			return;
		}

		const self = this;
		const table = this.table.$element[0];
		const scrollView = this.viewport.$element[0];
		const sticky = StickyFactory.create(target, table, scrollView, this.$element[0]);

		const cloned = sticky.element;

		const originElement = angular.element(sticky.origin);
		const clonedElement = angular.element(cloned);
		clonedElement.removeAttr(`q-grid-core:${target}`);
		clonedElement.removeAttr('q-grid-core:sticky');
		originElement.after(clonedElement);
		originElement.css('visibility', 'hidden');

		const unwatches = [];
		unwatches.push(this.view.theme.changed.on(
			() => self.$timeout(() => sticky.invalidate())
		));

		unwatches.push(this.view.model.dataChanged.on(
			() => self.$timeout(() => sticky.invalidate())
		));

		unwatches.push(this.view.model.groupChanged.on(
			() => self.$timeout(() => sticky.invalidate())
		));

		unwatches.push(this.view.model.pivotChanged.on(
			() => self.$timeout(() => sticky.invalidate())
		));

		unwatches.push(sticky.invalidated.on(
			() => self.$scope.$apply()
		));

		const onScroll = () => sticky.scrollSync();
		sticky.scrollView.addEventListener('scroll', onScroll);

		const onResize = () => sticky.invalidate();
		this.$window.addEventListener('resize', onResize);

		this.$scope.$watch(() => {
			const tagName = target === 'head' ? 'th' : 'td';
			return Array.from(originElement.find(tagName))
				.map(col => col.offsetWidth);
		}, () => self.$timeout(() => sticky.invalidate()),
			true);

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
	'$window',
	'$compile'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$sticky',
	controller: StickyCore,
	require: StickyCore.require,
	link: StickyCore.link
};