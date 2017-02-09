import {css} from '../services/dom';
import Event from '../infrastructure/event';

export default class Sticky {
	/**
	 * @param {Node} table - table node
	 * @param {Node} scrollView - view container which causes scroll
	 * @param {Node} source - thead for synchronization
	 * @param {boolean} withClone - defines source for sticky element
	 */
	constructor(table, scrollView, source, withClone=true) {
		this.table = table;
		this.scrollView = scrollView;
		this.source = source;
		this.invalidated = new Event();
		const builder = build(this, withClone);
		this.element = builder.element;
		this.destroy = () => {
			builder.destroy();
			css(this.scrollView, 'margin-top', '');
		};
	}

	scrollSync() {
		this.element.scrollLeft = this.scrollView.scrollLeft;
	}
}

function build(sticky, withClone) {
	if (!sticky.source) {
		return null;
	}
	const cloned = withClone ? sticky.source.cloneNode(true) : sticky.source;

	cloned.classList.add('sticky');
	css(cloned, 'position', 'absolute');
	css(cloned, 'overflow-x', 'hidden');
	css(cloned, 'visibility', 'hidden');

	const destroy = withClone ? () => {
		if (sticky.element !== null) {
			sticky.element.remove();
			sticky.element = null;
		}
	}
	: () => {
		if (sticky.source !== null) {
			sticky.source.remove();
			sticky.source = null;
		}
		sticky.element.classList.remove('sticky');
		css(sticky.element, 'position', null);
		css(sticky.element, 'overflow-x', null);
	};

	return {
		element: cloned,
		destroy: destroy
	};
}