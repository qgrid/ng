import Directive from './directive';
import {POSITION_NAME, GRID_NAME} from '@grid/view/definition';
import {max} from '@grid/core/utility';

class Position extends Directive(POSITION_NAME, {root: `^?${GRID_NAME}`}) {
	constructor($element, $attrs, $timeout) {
		super();

		this.element = $element[0];
		this.$attrs = $attrs;
		this.$timeout = $timeout;
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

		source.style.left = tr.left + (rect.left - tr.left) + 'px';
		source.style.top = tr.top + (rect.top - tr.top) + 'px';
	}

	intersection(a, b) {
		const xo = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
		const yo = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
		const area = xo * yo;
		return {area: area, a: a, b: b};
	}
}

Position.$inject = ['$element', '$attrs', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$position',
	controller: Position,
	require: Position.require,
	link: Position.link,
	scope: false
};