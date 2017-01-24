import Sticky from './sticky';

const TABLE_TAG = 'TABLE';
const THEAD_TAG = 'THEAD';
const TR_TAG = 'TR';
const TH_TAG = 'TH';
const DIV_TAG = 'DIV';

describe('Sticky', () => {
	describe('init', () => {
		const origin = createEmptyHead();
		const table = createTable(origin);
		const sticky = new Sticky(table, createView());

		it('should create head property', () => {
			expect(sticky.head).to.exist;
		});

		it('should create cloned element', () => {
			expect(sticky.head).to.not.equal(origin);
		});

		it('should create thead element', () => {
			expect(sticky.head.tagName).to.equal(THEAD_TAG);
		});

		it('should add specific class', () => {
			const className = 'sticky';

			const hasSpecificClass = sticky.head.classList.contains(className);
			expect(hasSpecificClass).to.be.true;
		});

		it('should set position to absolute', () => {
			expect(sticky.head.style.position).to.equal('absolute');
		});
	});

	describe('header', () => {
		let columnCount,
			origin,
			table,
			header;

		beforeEach(() => {
			columnCount = 10;
			origin = createHead(columnCount);
			table = createTable(origin);
			header = new Sticky(table, createView()).head;
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

function createTable(head) {
	const table = document.createElement(TABLE_TAG);
	table.appendChild(head);
	return table;
}

function thLength(head) {
	return Array.from(head.querySelectorAll(TH_TAG)).length;
}

function createView() {
	return document.createElement(DIV_TAG);
}