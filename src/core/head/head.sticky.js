import {css} from '../services/dom';
// import {debounce} from '../services/utility';

export default class Sticky {
	/**
	 * @param {Node} origin - Original thead node
	 */
	constructor(origin) {
		const self = this;
		this.origin = origin;
		this.header = origin.cloneNode(true);
		
		this.header.classList.add('sticky');
		css(this.header, 'position', 'absolute');
		css(this.header, 'overflow-x', 'hidden');
		
		watchChildren(origin, () => {
			const stickyTh = th(self.header);
			const originTh = th(self.origin);

			stickyTh.forEach(column => column.remove());
			originTh.forEach(column => {
				const clone = column.cloneNode(true);
				self.header.querySelector('tr').appendChild(clone);
			});
			self.invalidate();
		});
	}
	
	invalidate() {
		const style = window.getComputedStyle(this.origin);

		css(this.header, 'min-width', style.width);
		css(this.header, 'max-width', style.width);

		const stickyTh = th(this.header);
		const originTh = th(this.origin);
		stickyTh.forEach((column, index) => {
			const thStyle = window.getComputedStyle(originTh[index]);
			css(column, 'min-width', thStyle.width);
			css(column, 'max-width', thStyle.width);
		});
	}
}

function watchChildren(element, handler) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.removedNodes.length || mutation.addedNodes.length) {
				handler();
			}
		});
	});
	const config = {
		childList: true,
		subtree: true
	};
	observer.observe(element, config);
}

function th(head) {
	return Array.from(head.querySelectorAll('th'));
}