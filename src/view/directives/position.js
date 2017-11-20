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
		const vr = this.root.table.view.rect();

		const intersections = [];
		intersections.push(
			this.intersection(vr, {
				index: 0,
				top: tr.top,
				right: tr.left + sr.width,
				bottom: tr.top + sr.height,
				left: tr.left
			}));

		intersections.push(
			this.intersection(vr, {
				index: 1,
				top: tr.top,
				right: tr.right,
				bottom: tr.top + sr.height,
				left: tr.right - sr.width
			}));

		intersections.push(
			this.intersection(vr, {
				index: 2,
				top: tr.bottom - sr.height,
				right: tr.left + sr.width,
				bottom: tr.bottom,
				left: tr.left
			}));

		intersections.push(
			this.intersection(vr, {
				index: 3,
				top: tr.bottom - sr.height,
				right: tr.right,
				bottom: tr.bottom,
				left: tr.right - sr.width
			}));

		const intersection = max(intersections, i => i.area);
		const rect = intersection.b;

		const left = tr.left + (rect.left - tr.left);
		const top = tr.top + (rect.top - tr.top);

		const pos = this.fix({left, top, width: sr.width, height: sr.height});
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
		const w = this.$window.innerWidth;
		const h = this.$window.innerHeight;
		const x = rect.left;
		const y = rect.top;
		const eh = rect.height;
		const ew = rect.width;
		const eh2 = eh / 2;
		const ew2 = ew / 2;
		const gtx1 = x + ew2 > w;
		const ltx0 = x - ew2 < 0;
		const gty1 = y + eh > h;
		const lty0 = y - eh < 0;
		const l = ltx0 && gtx1
			? w / 2 - ew2
			: gtx1
				? x - ew
				: ltx0
					? x
					: x - ew2;
		const t = lty0 && gty1
			? h / 2 - eh2
			: gty1
				? y - eh
				: lty0
					? y
					: y - eh2;

		return {
			left: l,
			top: t
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