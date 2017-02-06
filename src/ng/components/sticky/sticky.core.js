import Directive from 'ng/directives/directive';
import {
	STICKY_CORE_NAME, VIEW_CORE_NAME, VIEWPORT_CORE_NAME,
	TABLE_CORE_NAME, HEAD_CORE_NAME, FOOT_CORE_NAME
} from 'src/definition';
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
	constructor($scope, $element, $window, $timeout, $compile, $templateCache) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$window = $window;
		this.$timeout = $timeout;
		this.$compile = $compile;
		this.$templateCache = $templateCache;
		this.sticky = null;
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

		model[`${target}Changed`]
			.on(e => {
				if (e.changes.hasOwnProperty('isSticky') &&
					e.state.isSticky) {
					this.apply(target);
				}
				else if (this.sticky) {
					this.sticky.destroy();
				}
			});

		if (model[target]().isSticky) {
			this.apply(target);
		} else {
			if (this.sticky !== null) {
				this.sticky.destroy();
			}
		}
	}

	apply(target) {
		if (this.$element.hasClass('sticky')) {
			return;
		}

		const table = this.table.$element[0];
		const scrollView = this.viewport.$element[0];
		const sticky = StickyFactory.create(target, table, scrollView, this.$element[0], false);

		const templateUrl = this.view.templateUrl(target);
		const stickySync = angular.element(`<t${target}>${this.$templateCache.get(templateUrl)}</t${target}>`);

		const removeGridAttrs = element => {
			const attributes = Array.from(element.attributes);
			attributes.forEach(attr => {
				const name = attr.name;
				if (name && name.indexOf('q-grid') === 0 && name !== 'q-grid-core:th') {
					element.removeAttribute(name);
				}
			});
			Array.from(element.children).forEach(removeGridAttrs);
		};

		removeGridAttrs(stickySync[0]);

		sticky.origin = stickySync[0];
		this.$element.after(stickySync);
		stickySync.css('visibility', 'hidden');

		this.$compile(stickySync.contents())(this.$scope);

		const unwatches = [];
		unwatches.push(this.view.theme.changed.on(
			() => this.$timeout(() => sticky.invalidate())
		));

		unwatches.push(this.view.model.viewChanged.on(
			() => this.$timeout(() => sticky.invalidate())
		));

		unwatches.push(sticky.invalidated.on(
			() => this.$scope.$apply()
		));

		const onScroll = () => sticky.scrollSync();
		sticky.scrollView.addEventListener('scroll', onScroll);

		const onResize = () => sticky.invalidate();
		this.$window.addEventListener('resize', onResize);

		this.$scope.$watch(() => {
				const tagName = target === 'head' ? 'th' : 'td';
				return Array.from(stickySync.find(tagName))
					.map(col => col.offsetWidth);
			}, () => this.$timeout(() => sticky.invalidate()),
			true);

		this.$scope.$on('$destroy', () => {
			unwatches.forEach(u => u());
			sticky.scrollView.removeEventListener('scroll', onScroll);
			this.$window.removeEventListener('resize', onResize);
			sticky.destroy();
		});

		this.sticky = sticky;
	}
}

StickyCore.$inject = ['$scope',
	'$element',
	'$window',
	'$timeout',
	'$compile',
	'$templateCache'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$sticky',
	controller: StickyCore,
	require: StickyCore.require,
	link: StickyCore.link
};