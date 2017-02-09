import {css} from '../services/dom';
import Sticky from './sticky';

export default class StickyHead extends Sticky {
	/**
	 * @param {Node} table - table node
	 * @param {Node} scrollView - view container which causes scroll
	 * @param {Node} source - thead for synchronization
	 * @param {boolean} withClone - defines source for sticky element
	 */
	constructor(table, scrollView, source, withClone) {
		super(table, scrollView, source, withClone);
		this.invalidate();
	}

	invalidate() {
		if (!this.element) {
			return;
		}
		const style = window.getComputedStyle(this.scrollView);

		css(this.element, 'min-width', style.width);
		css(this.element, 'max-width', style.width);
		const offset = this.source.offsetHeight;
		css(this.element, 'margin-top', `${this.scrollView.offsetHeight}px`);
		css(this.element, 'visibility', 'visible');
		css(this.source, 'margin-top', `-${offset}px`);
		css(this.table, 'margin-bottom', `-${offset}px`);
		css(this.scrollView, 'margin-bottom', `${offset}px`);

		const stickyTd = td(this.element);
		const sourceTd = td(this.source);
		stickyTd.forEach((column, index) => {
			const tdStyle = window.getComputedStyle(sourceTd[index]);
			css(column, 'min-width', tdStyle.width);
			css(column, 'max-width', tdStyle.width);
		});

		this.invalidated.emit();
	}
}

function td(foot) {
	return Array.from(foot.querySelectorAll('td'));
}