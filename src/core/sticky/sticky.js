import {css} from '../services/dom';
import * as observe from '../services/dom.observe';
import Event from '../infrastructure/event';

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
	}
	
	invalidate() {
		const style = window.getComputedStyle(this.scrollView);

		css(this.head, 'min-width', style.width);
		css(this.head, 'max-width', style.width);

		const tableStyle = window.getComputedStyle(this.table);
		const tableOffset = parseInt(tableStyle.paddingTop || 0, 10);
		const offset = this.origin.head.offsetHeight;

		css(this.scrollView, 'height', '100%');
		const height = parseInt(window.getComputedStyle(this.scrollView).height);
		css(this.scrollView, 'height', `${height - offset - tableOffset}px`);

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

function buildHead(sticky) {
	if (!sticky.origin.head) {
		return null;
	}
	const header = sticky.origin.head.cloneNode(true);

	header.classList.add('sticky');
	css(header, 'position', 'absolute');
	css(header, 'overflow-x', 'hidden');

	observe.children(sticky.origin.head)
		.on(() => {
			const stickyTh = th(header);
			const originTh = th(sticky.origin.head);

			stickyTh.forEach(column => column.remove());
			originTh.forEach(column => {
				const clone = column.cloneNode(true);
				header.querySelector('tr').appendChild(clone);
			});
			sticky.invalidate();
		});

	observe.style(sticky.origin.head)
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