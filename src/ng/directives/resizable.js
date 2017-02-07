import Directive from './directive';
import {RESIZABLE_NAME, STICKY_CORE_NAME, TH_CORE_NAME, DRAG_NAME} from 'src/definition';
import angular from 'angular';
import EventListener from 'core/infrastructure/event.listener';

class Resizable extends Directive(RESIZABLE_NAME, {stickyCore: `^^?${STICKY_CORE_NAME}`, th: `${TH_CORE_NAME}`}) {
	constructor($scope, $element, $attrs, $document, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.$document = $document;
		this.$timeout = $timeout;
		this.divider = angular.element('<div class="divider"></div>');
		this.listener = {
			divider: new EventListener(this, this.divider[0]),
			document: new EventListener(this, this.$document[0])
		};

		this.context = {
			defaultMin: 20,
			startX: 0,
			sourceColumn: null
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

		if (sticky && !context.sourceColumn) {
			context.sourceColumn = sticky
				.th(sticky.source)
				.find(th => th.classList.contains(this.th.column.key));
		}

		const width = parseInt(this.$element[0].clientWidth);
		context.startX = e.screenX - width;

		this.listener.document.on('mousemove', this.drag);
		this.listener.document.on('mouseup', this.dragEnd);
	}

	drag(e) {
		const context = this.context;
		const newWidth = Math.max(
			context.defaultMin,
			e.screenX - context.startX
		);
		const width = `${newWidth}px`;
		const style = {
			'max-width': width,
			'min-width': width,
			'width': width
		};

		this.$element.css(style);
		if (context.sourceColumn) {
			angular.element(context.sourceColumn).css(style);
			this.stickyCore.sticky.invalidate();
		}
	}

	dragEnd() {
		this.listener.document.off();
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

Resizable.$inject = ['$scope', '$element', '$attrs', '$document', '$timeout'];

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