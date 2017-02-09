import StickyHead from './sticky';

const TABLE_TAG = 'TABLE';
const THEAD_TAG = 'THEAD';
const TR_TAG = 'TR';
const TH_TAG = 'TH';
const DIV_TAG = 'DIV';

describe('Sticky Head', () => {
	describe('init', () => {
		const source = createEmptyHead();
		const table = createTable(source);
		const sticky = new StickyHead(createView(), table, source);
		const stickyWithoutClone = new StickyHead(createView(), table, source, false);

		it('should create element property', () => {
			expect(sticky.element).to.exist;
		});

		it('should create cloned element', () => {
			expect(sticky.element).to.not.equal(source);
		});

		it('should create thead element', () => {
			expect(sticky.element.tagName).to.equal(THEAD_TAG);
		});

		it('should add specific class', () => {
			const className = 'q-grid-sticky';

			const hasSpecificClass = sticky.element.classList.contains(className);
			expect(hasSpecificClass).to.be.true;
		});

		it('should set position to absolute', () => {
			expect(sticky.element.style.position).to.equal('absolute');
		});

		it('should copy reference to source for case without clone', () => {
			expect(stickyWithoutClone.element).to.equal(source);
		});
	});

	describe('header', () => {
		let columnCount,
			source,
			table,
			header;

		beforeEach(() => {
			columnCount = 10;
			source = createHead(columnCount);
			table = createTable(source);
			header = new StickyHead(createView(), table, source).element;
		});

		it('should has the same th count', () => {
			const expected = columnCount;

			expect(thLength(header)).to.equal(expected);
		});

		xit('should observe source header column removing', (done) => {
			const expected = columnCount - 1;

			source.querySelector(TH_TAG).remove();

			setTimeout(() => {
				expect(thLength(header)).to.equal(expected);
				done();
			}, 0);
		});

		xit('should observe source header column adding', (done) => {
			const expected = columnCount + 1;

			const newTh = document.createElement(TH_TAG);
			source.querySelector(TR_TAG).appendChild(newTh);

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