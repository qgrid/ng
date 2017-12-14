import {PluginView} from '../plugin.view';
import {GRID_PREFIX} from '@grid/core/definition';
import {max} from '@grid/core/utility';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {jobLine} from '@grid/core/services';

export class PositionView extends PluginView {
	constructor(context) {
		super();

		this.element = context.element;
		this.targetName = context.targetName;

		//this.display = this.element.style.display;
		//this.element.style.display = 'none';

		const listener = new EventListener(window, new EventManager(this));
		const job = jobLine(400);

		this.using(listener.on('resize', () => {
			this.invalidate();
			// In case if after window resize there can different animated layout changes
			job(() => this.invalidate());
		}));
	}

	invalidate(width, height) {
		const element = this.element;
		let node = element.parentNode;
		while (node) {
			const targetName = (this.targetName || '').toLowerCase();
			if (node.nodeName.toLowerCase() === targetName) {
				const pos = this.layout(node, width, height);
				if (pos.hasOwnProperty('left')) {
					element.style.left = pos.left + 'px';
				}

				if (pos.hasOwnProperty('right')) {
					element.style.right = pos.right + 'px';
				}

				if (pos.hasOwnProperty('top')) {
					element.style.top = pos.top + 'px';
				}

				if (pos.hasOwnProperty('bottom')) {
					element.style.bottom = pos.bottom + 'px';
				}

				return;
			}
			node = node.parentNode;
		}

		//element.style.display = this.display;
	}

	layout(target, width, height) {
		const {top, right, left, bottom} = target.getBoundingClientRect();
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
		const b = intersection.b;
		return this.fix({
			left: b.left - br.left,
			top: b.top - br.top,
			right: br.right - b.right,
			bottom: br.bottom - b.bottom,
			width,
			height
		});
	}

	intersection(a, b) {
		const xo = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
		const yo = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
		const area = xo * yo;
		return {area, a, b};
	}

	fix(rect) {
		return {
			// left: rect.left,
			// top: rect.top
			bottom: rect.bottom,
			right: rect.right
		};

		// const wr = this.windowRect();
		// const br = this.boxRect();
		// const {width: vw, height: vh} = wr;
		// const vx = br.left - wr.left;
		// const vy = br.top - wr.top;
		// const {height: rh, width: rw} = rect;
		// const rx = rect.left + vx;
		// const ry = rect.top + vy;
		// const gtx1 = rx + rw > vw;
		// const ltx0 = rx < 0;
		// const gty1 = ry + rh > vh;
		// const lty0 = ry < 0;
		// const result = {};
		//
		// if (ltx0) {
		// 	result.left = (vw - rw) / 2 - vx;
		// }
		// else if (gtx1) {
		// 	result.right = rect.right;
		// }
		// else {
		// 	result.left = rect.left;
		// }
		//
		// if (lty0) {
		// 	result.top = (vw - rw) / 2 - vx;
		// }
		// else if (gty1) {
		// 	result.bottom = rect.bottom;
		// }
		// else {
		// 	result.top = rect.top;
		// }
		//
		// return result;
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
		const {innerHeight: h, innerWidth: w} = window;
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