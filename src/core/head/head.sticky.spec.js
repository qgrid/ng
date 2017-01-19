'use strict';

import Sticky from './head.sticky';

const THEAD_TAG = 'THEAD';
const TR_TAG = 'TR';
const TH_TAG = 'TH';

describe('Sticky', () => {
	describe('init', () => {
		const origin = createEmptyHead();
		const sticky = new Sticky(origin);

		it('should create header property', () => {
			expect(sticky.header).to.exist;
		});

		it('should create cloned element', () => {
			expect(sticky.header).to.not.equal(origin);
		});

		it('should create thead element', () => {
			expect(sticky.header.tagName).to.equal(THEAD_TAG);
		});

		it('should add specific class', () => {
			const className = 'sticky';

			const hasSpecificClass = sticky.header.classList.contains(className);
			expect(hasSpecificClass).to.be.true;
		});

		it('should set position to absolute', () => {
			expect(sticky.header.style.position).to.equal('absolute');
		});
	});

	describe('header', () => {
		let columnCount,
			origin,
			header;

		beforeEach(() => {
			columnCount = 10;
			origin = createHead(columnCount);
			header = new Sticky(origin).header;
		});

		it('should has the same th count', () => {
			const expected = columnCount;

			expect(thLength(header)).to.equal(expected);
		});

		it('should observe origin header column removing', (done) => {
			const expected = columnCount - 1;

			origin.querySelector(TH_TAG).remove();

			setTimeout(() => {
				expect(thLength(header)).to.equal(expected);
				done();
			}, 0);
		});

		it('should observe origin header column adding', (done) => {
			const expected = columnCount + 1;

			const newTh = document.createElement(TH_TAG);
			origin.querySelector(TR_TAG).appendChild(newTh);

			setTimeout(() => {
				expect(thLength(header)).to.equal(expected);
				done();
			}, 0);
		});
	});
});

function createEmptyHead() {
	return document.createElement(THEAD_TAG);
}

function createHead(columnCount) {
	const thead = document.createElement(THEAD_TAG);
	const tr = document.createElement(TR_TAG);
	for (let i = 0; i < columnCount; i++) {
		const th = document.createElement(TH_TAG);
		th.textContent = `column ${i}`;
		tr.appendChild(th);
	}
	thead.appendChild(tr);
	return thead;
}

function thLength(head) {
	return Array.from(head.querySelectorAll(TH_TAG)).length;
}