import {css} from '../services/dom';
import * as observe from '../services/dom.observe';
import Event from '../infrastructure/event';

export default class Sticky {
	/**
	 * @param {Node} table - table node
	 * @param {Node} scrollView - view container which causes scroll
	 * @param {Node} origin - view container which causes scroll
	 */
	constructor(table, scrollView, origin) {
		this.table = table;
		this.scrollView = scrollView;
		this.origin = origin;
		this.invalidated = new Event();
		this.element = build(this);
	}

	invalidateHeight() {
		const stickies = Array.from(this.table.querySelectorAll('.sticky'));
		let offsetHeight = 0;
		stickies.forEach(s => offsetHeight += s.offsetHeight);
		css(this.scrollView, 'height', '100%');
		const viewHeight = parseInt(window.getComputedStyle(this.scrollView).height);
		css(this.scrollView, 'height', `${viewHeight - offsetHeight}px`);
	}

	scrollSync() {
		this.element.scrollLeft = this.scrollView.scrollLeft;
	}
	
	destroy() {
		if (this.element !== null) {
			this.element.remove();
			this.element = null;
		}
		css(this.scrollView, 'margin-top', '');
	}
}

function build(sticky) {
	if (!sticky.origin) {
		return null;
	}
	const cloned = sticky.origin.cloneNode(true);

	cloned.classList.add('sticky');
	css(cloned, 'position', 'absolute');
	css(cloned, 'overflow-x', 'hidden');

	observe.style(sticky.origin)
		.on(e => {
			if (!e.oldValue || e.oldValue.width !== e.newValue.width) {
				setTimeout(() => sticky.invalidate(), 0);
			}
		});

	observe.className(sticky.scrollView)
		.on(e => {
			if ((e.oldValue || e.oldValue === '')
				&& e.oldValue !== e.newValue) {
				setTimeout(() => sticky.invalidate(), 0);
			}
		});

	return cloned;
}