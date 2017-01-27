import {css} from '../services/dom';
import Sticky from './sticky';

export default class StickyHead extends Sticky {
	/**
	 * @param {Node} table - table node
	 * @param {Node} scrollView - view container which causes scroll
	 * @param {Node} origin - view container which causes scroll
	 */
	constructor(table, scrollView, origin) {
		super(table, scrollView, origin);
	}

	invalidate() {
		const style = window.getComputedStyle(this.scrollView);

		css(this.element, 'min-width', style.width);
		css(this.element, 'max-width', style.width);

		super.invalidateHeight();

		const offset = this.origin.offsetHeight;
		css(this.element, 'margin-top', `${this.scrollView.offsetHeight}px`);
		css(this.origin, 'margin-top', `-${offset}px`);
		css(this.table, 'margin-bottom', `-${offset}px`);
		css(this.scrollView, 'margin-bottom', `${offset}px`);

		const stickyTd = td(this.element);
		const originTd = td(this.origin);
		stickyTd.forEach((column, index) => {
			const tdStyle = window.getComputedStyle(originTd[index]);
			css(column, 'min-width', tdStyle.width);
			css(column, 'max-width', tdStyle.width);
		});

		this.invalidated.emit();
	}
}

function td(foot) {
	return Array.from(foot.querySelectorAll('td'));
}