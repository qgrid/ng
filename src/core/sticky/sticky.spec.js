import StickyHead from './sticky';

const TABLE_TAG = 'TABLE';
const THEAD_TAG = 'THEAD';
const TR_TAG = 'TR';
const TH_TAG = 'TH';
const DIV_TAG = 'DIV';

describe('Sticky Head', () => {
	describe('init', () => {
		const origin = createEmptyHead();
		const table = createTable(origin);
		const sticky = new StickyHead(createView(), table, origin);
		const stickyWithoutClone = new StickyHead(createView(), table, origin, false);

		it('should create element property', () => {
			expect(sticky.element).to.exist;
		});

		it('should create cloned element', () => {
			expect(sticky.element).to.not.equal(origin);
		});

		it('should create thead element', () => {
			expect(sticky.element.tagName).to.equal(THEAD_TAG);
		});

		it('should add specific class', () => {
			const className = 'sticky';

			const hasSpecificClass = sticky.element.classList.contains(className);
			expect(hasSpecificClass).to.be.true;
		});

		it('should set position to absolute', () => {
			expect(sticky.element.style.position).to.equal('absolute');
		});

		it('should copy reference to origin for case without clone', () => {
			expect(stickyWithoutClone.element).to.equal(origin);
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
			header = new StickyHead(createView(), table, origin).element;
		});

		it('should has the same th count', () => {
			const expected = columnCount;

			expect(thLength(header)).to.equal(expected);
		});

		xit('should observe origin header column removing', (done) => {
			const expected = columnCount - 1;

			origin.querySelector(TH_TAG).remove();

			setTimeout(() => {
				expect(thLength(header)).to.equal(expected);
				done();
			}, 0);
		});

		xit('should observe origin header column adding', (done) => {
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