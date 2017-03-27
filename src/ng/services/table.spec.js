import Table from './table';

describe('Table', () => {
	const markup = {
		view: '<q-grid-core:view class="q-grid-view layout-column flex" q-grid:markup="view"><table q-grid:markup="table" tabindex="0">' +
		'<thead q-grid-core:head="" q-grid:markup="head"><tr><th><label aria-label="Last Name">Last Name</label></div></th><th>' +
		'<label aria-label="First Name">First Name</label></div></th></tr></thead><tbody><tr><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Laserna</td><td class="q-grid-rowIndicator q-grid-row-indicator">Lue</td></tr><tr><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Grebel</td><td class="q-grid-rowIndicator q-grid-row-indicator">Jasper</td></tr><tr><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Beichner</td><td class="q-grid-rowIndicator q-grid-row-indicator">Kandra</td></tr><tr><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Schmith</td><td class="q-grid-rowIndicator q-grid-row-indicator">Jeff</td></tr></tbody></table>',
		table: '<table q-grid:markup="table" tabindex="0"><thead q-grid-core:head="" q-grid:markup="head"><tr><th><label aria-label="Last Name">' +
		'Last Name</label></div></th><th><label aria-label="First Name">First Name</label></div></th></tr></thead><tbody><tr>' +
		'<td class="q-grid-rowIndicator q-grid-row-indicator">Laserna</td><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Lue</td></tr><tr><td class="q-grid-rowIndicator q-grid-row-indicator">Grebel</td><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Jasper</td></tr><tr><td class="q-grid-rowIndicator q-grid-row-indicator">Beichner</td>' +
		'<td class="q-grid-rowIndicator q-grid-row-indicator">Kandra</td></tr><tr><td class="q-grid-rowIndicator q-grid-row-indicator">' +
		'Schmith</td><td class="q-grid-rowIndicator q-grid-row-indicator">Jeff</td></tr></tbody></table>'
	};
	const markupEmpty = {};
	const tableArr = [new Table(markup), new Table(markupEmpty)];

	describe('table should have properties and they should be objects', () => {
		describe('markup', () => {
			it('body', () => {
				for (let table of tableArr) {
					expect(table).to.have.property('body');
					expect(table.body).to.be.instanceOf(Object);
				}
			});
			it('head', () => {
				for (let table of tableArr) {
					expect(table).to.have.property('head');
					expect(table.head).to.be.instanceOf(Object);
				}
			});
			it('foot', () => {
				for (let table of tableArr) {
					expect(table).to.have.property('foot');
					expect(table.foot).to.be.instanceOf(Object);
				}
			});
		});
	});

	describe('empty markup call to properties check', () => {
		const table = tableArr[1];
		it('column', () => {
			expect(table.body.column()).to.be.instanceOf(Object);
			expect(table.body.column()).to.have.property('cells');
			expect(table.body.column().cells).to.be.instanceOf(Array);
			expect(table.body.column().cells).to.have.lengthOf(0);
		});
		it('row', () => {
			expect(table.body.row()).to.be.instanceOf(Object);
			expect(table.body.row()).to.have.property('cells');
			expect(table.body.row().cells).to.be.instanceOf(Array);
			expect(table.body.row().cells).to.have.lengthOf(0);
		});
		it('cell', () => {
			expect(table.body.cell()).to.be.null;
			expect(table.head.cell()).to.be.null;
			expect(table.foot.cell()).to.be.null;
		});
	});
	describe('normal markup call to properties check', () => {
		const table = tableArr[0];
		it('column', () => {
			expect(table.body.column(0)).to.be.instanceOf(Object);
			expect(table.body.column(0)).to.have.property('cells');
			expect(table.body.column(0).cells).to.be.instanceOf(Array);
			expect(table.body.column(0).cells).to.have.lengthOf(4);
		});
		it('row', () => {
			expect(table.body.row(0)).to.be.instanceOf(Object);
			expect(table.body.row(0)).to.have.property('cells');
			expect(table.body.row(0).cells).to.be.instanceOf(Array);
			expect(table.body.row(0).cells).to.have.lengthOf(2);
		});
		it('cell', () => {
			expect(table.body.cell(0, 0)).to.be.null;
			expect(table.head.cell(0, 0)).to.be.null;
			expect(table.foot.cell(0, 0)).to.be.null;
		});
	});

});