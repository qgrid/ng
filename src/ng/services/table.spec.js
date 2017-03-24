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
	const table = new Table(markup);

	it('should return parts of table', () => {
		expect(table.body).to.be.ok;

	});
	describe('Cell', () => {
		const cell = '<td class="q-grid-name.last q-grid-text"><span>Sance</span></td>';
		it('should create class cell', () => {
		});
		it('should add css class to cell', () => {
			// addClass(element, 'test-class');
			//
			// assert.equal(element.className, 'test-class');
		});
	})
});