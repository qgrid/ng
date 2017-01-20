import {css} from '../services/dom';

export default class Sticky {
	/**
	 * @param {Node} table - table node
	 * @param {Node} scrollView - view container which causes scroll
	 */
	constructor(table, scrollView) {
		const self = this;
		this.table = table;
		this.origin = table.querySelector('thead');
		this.scrollView = scrollView;
		this.header = this.origin.cloneNode(true);
		
		this.header.classList.add('sticky');
		css(this.header, 'position', 'absolute');
		css(this.header, 'overflow-x', 'hidden');
		
		watchChildren(this.origin, () => {
			const stickyTh = th(self.header);
			const originTh = th(self.origin);

			stickyTh.forEach(column => column.remove());
			originTh.forEach(column => {
				const clone = column.cloneNode(true);
				self.header.querySelector('tr').appendChild(clone);
			});
			self.invalidate();
		});

		watchStyle(this.origin, (oldValue, newValue) => {
			if (!oldValue || oldValue.width !== newValue.width) {
				setTimeout(() => self.invalidate(), 0);
			}
		});

		scrollView.addEventListener('scroll', () => {
			self.header.scrollLeft = self.scrollView.scrollLeft;
		});
	}
	
	invalidate() {
		const style = window.getComputedStyle(this.scrollView);

		css(this.header, 'min-width', style.width);
		css(this.header, 'max-width', style.width);

		const tableStyle = window.getComputedStyle(this.table);
		const tableOffset = 0; // parseInt(tableStyle.paddingTop, 10);
		const offset = this.origin.offsetHeight;
		css(this.scrollView, 'margin-top', `${offset + tableOffset}px`);
		css(this.header, 'margin-top', `-${offset + tableOffset}px`);
		css(this.table, 'margin-top', `-${offset}px`);
		// css(this.table, 'padding-top', '0');

		const stickyTh = th(this.header);
		const originTh = th(this.origin);
		stickyTh.forEach((column, index) => {
			const thStyle = window.getComputedStyle(originTh[index]);
			css(column, 'min-width', thStyle.width);
			css(column, 'max-width', thStyle.width);
		});
	}

	destroy() {
		this.header.remove();
		css(this.scrollView, 'margin-top', '');
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

function watchStyle(element, handler) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName) {
				handler(mutation.oldValue, mutation.target.style);
			}
		});
	});
	const config = {
		attributes: true,
		attributeOldValue: true,
		attributeFilter: ['style']
	};
	observer.observe(element, config);
}

function th(head) {
	return Array.from(head.querySelectorAll('th'));
}