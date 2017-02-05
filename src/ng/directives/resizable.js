import Directive from './directive';
import {RESIZABLE_NAME, STICKY_CORE_NAME, TH_CORE_NAME, DRAG_NAME} from 'src/definition';
import angular from 'angular';
import EventListener from 'core/infrastructure/event.listener';

class Resizable extends Directive(RESIZABLE_NAME, {stickyCore: `^^?${STICKY_CORE_NAME}`, th: `${TH_CORE_NAME}`}) {
	constructor($element, $attrs, $document) {
		super();

		this.$element = $element;
		this.$attrs = $attrs;
		this.$document = $document;
		this.divider = angular.element('<div class="divider"></div>');
		this.listener = {
			divider: new EventListener(this, this.divider[0]),
			document: new EventListener(this, this.$document[0])
		};

		this.context = {
			width: {
				min: null,
				max: null
			},
			state: {
				width: 0,
				x: 0
			},
			originColumn: null,
			defaultWidth: {
				min: 20,
				max: 200
			}
		};
	}

	onInit() {
		if (!this.canResize(this.event())) {
			return;
		}

		this.$element.after(this.divider);
		this.listener.divider.on('mousedown', this.dragStart);
	}

	onDestroy() {
		this.listener.divider.off();
		this.listener.document.off();
	}

	dragStart(e) {
		e.preventDefault();

		const sticky = this.stickyCore.sticky;
		const context = this.context;

		if (sticky && !context.originColumn) {
			context.originColumn = sticky
				.th(sticky.origin)
				.find(th => th.classList.contains(this.th.column.key));
		}

		if (context.width.min === null) {
			context.width.min =
				parseInt(this.$element.css('min-width'), 10) ||
				context.defaultWidth.min;
		}

		context.width.max =
			parseInt(this.$element.css('max-width'), 10) ||
			context.defaultWidth.max;

		context.state.width = parseInt(this.$element[0].clientWidth);
		context.state.x = e.screenX;

		this.listener.document.on('mousemove', this.drag);
		this.listener.document.on('mouseup', this.dragEnd);
	}

	drag(e) {
		const context = this.context;
		const newWidth = Math.max(
			context.width.min,
			context.state.width + e.screenX - context.state.x
		);

		const width = `${newWidth}px`;
		const style = {
			'max-width': width,
			'min-width': width,
			'width': width
		};

		this.$element.css(style);
		if (context.originColumn) {
			angular.element(context.originColumn).css(style);
			this.stickyCore.sticky.invalidate(/*'sticky'*/);
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

Resizable.$inject = ['$element', '$attrs', '$document'];

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