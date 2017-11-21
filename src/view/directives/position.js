import Directive from './directive';
import {POSITION_NAME, GRID_NAME} from '@grid/view/definition';
import {max} from '@grid/core/utility';

class Position extends Directive(POSITION_NAME, {root: `^?${GRID_NAME}`}) {
	constructor($element, $attrs, $timeout, $window) {
		super();

		this.element = $element[0];
		this.$attrs = $attrs;
		this.$timeout = $timeout;
		this.$window = $window;
	}

	onInit() {
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
		const tr = target.getBoundingClientRect();
		const sr = source.getBoundingClientRect();
		const cr = this.clientRect();

		const {top, right, left, bottom} = tr;
		const {width, height} = sr;

		const intersections = [];
		intersections.push(
			this.intersection(cr, {
				top: top,
				right: left + width,
				bottom: top + height,
				left: left
			}));

		intersections.push(
			this.intersection(cr, {
				top: top,
				right: right,
				bottom: top + height,
				left: right - width
			}));

		intersections.push(
			this.intersection(cr, {
				top: bottom - height,
				right: left + width,
				bottom: bottom,
				left: left
			}));

		intersections.push(
			this.intersection(cr, {
				top: bottom - height,
				right: right,
				bottom: bottom,
				left: right - width
			}));

		const intersection = max(intersections, i => i.area);

		const {left: l, top: t} = intersection.b;

		const pos = this.fix({left: l, top: t, width, height});

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
		const cr = this.clientRect();
		const {width: w, height: h} = cr;
		const {left: rx, top: ry, height: rh, width: rw} = rect;
		const gtx1 = rx + rw > w;
		const ltx0 = rx < 0;
		const gty1 = ry + rh > h;
		const lty0 = ry < 0;
		const left = ltx0 || gtx1
			? (w - rw) / 2
			: rx;
		const top = lty0 || gty1
			? (h - rh) / 2
			: ry;

		return {left, top};
	}

	clientRect() {
		const wnd = this.$window;
		const {innerHeight: h, innerWidth: w} = wnd;
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