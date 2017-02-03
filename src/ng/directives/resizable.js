import Directive from './directive';
import {RESIZABLE_NAME, STICKY_CORE_NAME, TH_CORE_NAME} from 'src/definition';
import angular from 'angular';
import EventListener from 'core/infrastructure/event.listener';
import {debounce} from 'core/services/utility';

class Resizable extends Directive(RESIZABLE_NAME, {
	stickyCore: `^^?${STICKY_CORE_NAME}`,
	th: `${TH_CORE_NAME}`
}) {
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
		this.settings = {
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
		const settings = this.settings;
		if (sticky && !settings.originColumn) {
			settings.originColumn = sticky.th(sticky.origin)
				.find(th => th.classList.contains(this.th.column.key));
		}
		if (settings.width.min == null) {
			settings.width.min = parseInt(this.$element.css('min-width'), 10) || settings.defaultWidth.min;
		}
		settings.width.max = parseInt(this.$element.css('max-width'), 10) || settings.defaultWidth.max;

		settings.state.width = parseInt(this.$element[0].clientWidth);
		settings.state.x = e.screenX;

		this.listener.document.on('mousemove', this.drag);
		this.listener.document.on('mouseup', this.dragEnd);
	}

	drag(e) {
		const settings = this.settings;
		const newWidth = settings.state.width + e.screenX - settings.state.x;

		if (newWidth >= settings.width.min) {
			const width = `${newWidth}px`;
			const style = {
				'max-width': width,
				'min-width': width,
				'width': width
			};
			this.$element.css(style);

			if (settings.originColumn) {
				angular.element(settings.originColumn).css(style);
				this.stickyCore.sticky.invalidate();
				// // debounce(() => this.stickyCore.sticky.invalidate(), 100)();
			}
		}
	}

	dragEnd() {
		this.listener.document.off();
	}
}

Resizable.$inject = ['$element', '$attrs', '$document'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$resizable',
	controller: Resizable,
	require: Resizable.require,
	link: Resizable.link
};