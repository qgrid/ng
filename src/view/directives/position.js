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

		const intersections = [];
		intersections.push(
			this.intersection(cr, {
				index: 0,
				top: tr.top,
				right: tr.left + sr.width,
				bottom: tr.top + sr.height,
				left: tr.left
			}));

		intersections.push(
			this.intersection(cr, {
				index: 1,
				top: tr.top,
				right: tr.right,
				bottom: tr.top + sr.height,
				left: tr.right - sr.width
			}));

		intersections.push(
			this.intersection(cr, {
				index: 2,
				top: tr.bottom - sr.height,
				right: tr.left + sr.width,
				bottom: tr.bottom,
				left: tr.left
			}));

		intersections.push(
			this.intersection(cr, {
				index: 3,
				top: tr.bottom - sr.height,
				right: tr.right,
				bottom: tr.bottom,
				left: tr.right - sr.width
			}));

		const intersection = max(intersections, i => i.area);
		const rect = intersection.b;

		const pos = this.fix({
			left: rect.left,
			top: rect.top,
			width: sr.width,
			height: sr.height
		});

		source.style.left = pos.left + 'px';
		source.style.top = pos.top + 'px';
	}

	intersection(a, b) {
		const xo = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
		const yo = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
		const area = xo * yo;
		return {area: area, a: a, b: b};
	}

	fix(rect) {
		const cr = this.clientRect();
		const w = cr.width;
		const h = cr.height;
		const rx = rect.left;
		const ry = rect.top;
		const rh = rect.height;
		const rw = rect.width;
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

		return {
			top: 0,
			left: 0,
			bottom: wnd.innerHeight,
			right: wnd.innerWidth,
			height: wnd.innerHeight,
			width: wnd.innerWidth
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