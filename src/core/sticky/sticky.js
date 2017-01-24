import {css} from '../services/dom';
import {debounce} from '../services/utility';
import Event from '../services/event';

export default class Sticky {
	/**
	 * @param {Node} table - table node
	 * @param {Node} scrollView - view container which causes scroll
	 */
	constructor(table, scrollView) {
		this.table = table;
		this.scrollView = scrollView;
		this.origin = {
			head: table.querySelector('thead'),
			foot: table.querySelector('tfoot')
		};
		this.invalidated = new Event();
		this.head = buildHead(this);
		this.foot = buildFoot(this);
		// ToDo: make it private
		this.height = 0;
	}
	
	invalidate() {
		const style = window.getComputedStyle(this.scrollView);

		css(this.head, 'min-width', style.width);
		css(this.head, 'max-width', style.width);

		const tableStyle = window.getComputedStyle(this.table);
		const tableOffset = parseInt(tableStyle.paddingTop, 10);
		const offset = this.origin.head.offsetHeight;

		if (!this.height) {
			this.height = parseInt(window.getComputedStyle(this.scrollView).height, 10);
		}

		css(this.scrollView, 'height', `${this.height - offset - tableOffset}px`);
		css(this.scrollView, 'margin-top', `${offset + tableOffset}px`);
		css(this.head, 'margin-top', `-${offset}px`);
		css(this.table, 'margin-top', `-${offset + tableOffset}px`);

		const stickyTh = th(this.head);
		const originTh = th(this.origin.head);
		stickyTh.forEach((column, index) => {
			const thStyle = window.getComputedStyle(originTh[index]);
			css(column, 'min-width', thStyle.width);
			css(column, 'max-width', thStyle.width);
		});
		this.invalidated.emit();
	}
	
	destroy() {
		if (this.head !== null) {
			this.head.remove();
			this.head = null;
		}
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

	return observer.disconnect;
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

	return observer.disconnect;
}

function buildHead(sticky) {
	if (!sticky.origin.head) {
		return null;
	}
	const header = sticky.origin.head.cloneNode(true);

	header.classList.add('sticky');
	css(header, 'position', 'absolute');
	css(header, 'overflow-x', 'hidden');

	watchChildren(sticky.origin.head, () => {
		const stickyTh = th(header);
		const originTh = th(sticky.origin.head);

		stickyTh.forEach(column => column.remove());
		originTh.forEach(column => {
			const clone = column.cloneNode(true);
			header.querySelector('tr').appendChild(clone);
		});
		sticky.invalidate();
	});

	watchStyle(sticky.origin.head, (oldValue, newValue) => {
		if (!oldValue || oldValue.width !== newValue.width) {
			setTimeout(() => sticky.invalidate(), 0);
		}
	});

	sticky.scrollView.addEventListener('scroll', () => {
		header.scrollLeft = sticky.scrollView.scrollLeft;
	});

	window.addEventListener('resize', () => {
		debounce(() => sticky.invalidate(), 200)();
	});

	return header;
}

function buildFoot(sticky) {
	// ToDo: implement for foot
	if (!sticky.origin.foot) {
		return null;
	}
	const footer = sticky.origin.foot.cloneNode(true);
	return footer;
}

function th(head) {
	return Array.from(head.querySelectorAll('th'));
}