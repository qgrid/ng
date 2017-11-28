import Directive from './directive';
import {POSITION_NAME, GRID_NAME} from '@grid/view/definition';
import {max} from '@grid/core/utility';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {jobLine} from '@grid/core/services';
import {GRID_PREFIX} from '@grid/core/definition';

class Position extends Directive(POSITION_NAME, {root: `^?${GRID_NAME}`}) {
	constructor($element, $attrs, $timeout, $window) {
		super();

		this.element = $element[0];
		this.$attrs = $attrs;
		this.$timeout = $timeout;
		this.$window = $window;

		const listener = new EventListener(this.$window, new EventManager(this));
		const job = jobLine(400);

		this.using(listener.on('resize', () => {
			this.invalidate();
			// In case if after window resize there can different animated layout changes
			job(() => this.invalidate());
		}));
	}

	onInit() {
		this.invalidate();
	}

	invalidate() {
		if (this.root) {
			const targetName = (this.$attrs[POSITION_NAME] || '').toLowerCase();
			let node = this.element.parentNode;
			while (node) {
				if (node.nodeName.toLowerCase() === targetName) {
					this.layout(node, this.element);
					this.element.style.opacity = 1;
					return;
				}
				node = node.parentNode;
			}
		}
	}

	layout(target, source) {
		const {top, right, left, bottom} = target.getBoundingClientRect();
		const {width, height} = source.getBoundingClientRect();
		const br = this.boxRect();
		const intersections = [];

		intersections.push(
			this.intersection(br, {
				top: top,
				right: left + width,
				bottom: top + height,
				left: left
			}));

		intersections.push(
			this.intersection(br, {
				top: top,
				right: right,
				bottom: top + height,
				left: right - width
			}));

		intersections.push(
			this.intersection(br, {
				top: bottom - height,
				right: left + width,
				bottom: bottom,
				left: left
			}));

		intersections.push(
			this.intersection(br, {
				top: bottom - height,
				right: right,
				bottom: bottom,
				left: right - width
			}));

		const intersection = max(intersections, i => i.area);
		const {left: l, top: t} = intersection.b;
		const pos = this.fix({left: l - br.left, top: t - br.top, width, height});

		source.style.left = pos.left + 'px';
		source.style.top = pos.top + 'px';
	}

	intersection(a, b) {
		const xo = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
		const yo = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
		const area = xo * yo;
		return {area, a, b};
	}

	fix(rect) {
		const wr = this.windowRect();
		const br = this.boxRect();
		const {width: vw, height: vh} = wr;
		const vx = br.left - wr.left;
		const vy = br.top - wr.top;
		const {height: sh, width: sw} = rect;
		const sx = rect.left + vx;
		const sy = rect.top + vy;
		const gtx1 = sx + sw > vw;
		const ltx0 = sx < 0;
		const gty1 = sy + sh > vh;
		const lty0 = sy < 0;
		const left = ltx0 || gtx1
			? (vw - sw) / 2 - vx
			: rect.left;
		const top = lty0 || gty1
			? (vh - sh) / 2 - vy
			: rect.top;

		return {left, top};
	}

	boxRect() {
		let view = this.element;
		const marker = `${GRID_PREFIX}-box`;
		while (view) {
			if (view.classList && view.classList.contains(marker)) {
				return view.getBoundingClientRect();
			}

			view = view.parentNode;
		}

		return this.windowRect();
	}

	windowRect() {
		const {innerHeight: h, innerWidth: w} = this.$window;
		return {
			top: 0,
			left: 0,
			bottom: h,
			right: w,
			height: h,
			width: w
		};
	}
}

Position.$inject = ['$element', '$attrs', '$timeout', '$window'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$position',
	controller: Position,
	require: Position.require,
	link: Position.link,
	scope: false
};