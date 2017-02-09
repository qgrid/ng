import Directive from './directive';
import {RESIZABLE_NAME, STICKY_CORE_NAME, TH_CORE_NAME, DRAG_NAME, GRID_PREFIX} from 'src/definition';
import EventListener from 'core/infrastructure/event.listener';

class Resizable extends Directive(RESIZABLE_NAME, {stickyCore: `^^?${STICKY_CORE_NAME}`, th: `${TH_CORE_NAME}`}) {
	constructor($scope, $element, $attrs, $document, $timeout, $window) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.$document = $document;
		this.$window = $window;
		this.$timeout = $timeout;
		this.divider = angular.element(`<div class="${GRID_PREFIX}-divider"></div>`);
		this.listener = {
			divider: new EventListener(this, this.divider[0]),
			document: new EventListener(this, this.$document[0])
		};

		this.context = {
			min: 15,
			x: 0,
			width: 0,
			source: null
		};
	}

	onInit() {
		if (!this.canResize(this.event())) {
			return;
		}

		this.listener.divider.on('mousedown', this.dragStart);
		this.$timeout(() => this.$element.append(this.divider));
	}

	onDestroy() {
		this.listener.divider.off();
		this.listener.document.off();
	}

	dragStart(e) {
		e.preventDefault();

		const sticky = this.stickyCore.sticky;
		const context = this.context;
		if (sticky) {
			context.source = sticky
				.th(sticky.source)
				.find(th => th.classList.contains(`${GRID_PREFIX}-${this.th.column.key}`));
		}

		const style = this.$window.getComputedStyle(this.$element[0], null);
		//context.min = parseFloat(style.getPropertyValue('min-width'));
		context.width = parseFloat(style.getPropertyValue('width'));
		context.x = e.screenX;
		this.listener.document.on('mousemove', this.drag);
		this.listener.document.on('mouseup', this.dragEnd);
	}

	drag(e) {
		const context = this.context;
		const offsetX = e.screenX - context.x;
		const newWidth = Math.max(
			context.min,
			context.width + offsetX
		);

		const width = `${newWidth}px`;
		const style = {
			'max-width': width,
			'min-width': width,
			'width': width
		};

		this.$element.css(style);
		if (context.source) {
			angular.element(context.source).css(style);
			this.stickyCore.sticky.invalidate();
		}
	}

	dragEnd() {
		this.listener.document.off();
		this.context.source = null;
	}

	event() {
		const source = this.transfer();
		return {
			$event: {
				source: source,
				target: null
			}
		};
	}
}

Resizable.$inject = ['$scope', '$element', '$attrs', '$document', '$timeout', '$window'];

export default {
	restrict: 'A',
	bindToController: {
		'canResize': `&${RESIZABLE_NAME}`,
		'transfer': `&${DRAG_NAME}`,
	},
	controllerAs: '$resizable',
	controller: Resizable,
	require: Resizable.require,
	link: Resizable.link
};