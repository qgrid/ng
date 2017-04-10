import Table from './table';
import angular from 'angular'; //necessary to test CellDom model property

const myWindow = window.open("", "MsgWindow", "width=100,height=50");
function htmlToElement(html) {
	const template = myWindow.document.createElement('template');
	template.innerHTML = html;
	return template.content.firstChild;
}

describe('Table', () => {
	const table = '<table><thead><tr><th><label>Last Name</label></div></th><th><label>First Name</label></div></th></tr></thead>' +
		'<tbody><tr><td>Laserna</td><td>Lue</td></tr><tr><td>Grebel</td><td>Jasper</td></tr><tr><td>Beichner</td>' +
		'<td>Kandra</td></tr><tr><td>Schmith</td><td>Jeff</td></tr></tbody></table>';
	const body = '<tbody><tr><td>Laserna</td><td>Lue</td></tr><tr><td>Grebel</td><td>Jasper</td></tr><tr>' +
		'<td>Beichner</td><td>Kandra</td></tr><tr><td>Schmith</td><td>Jeff</td></tr></tbody>';
	const head = '<thead><tr><th><label>Last Name</label></div></th><th><label>First Name</label></div></th></tr></thead>';

	const markup = {
		table: htmlToElement(table),
		body: htmlToElement(body),
		head: htmlToElement(head),
		document: {}
	};

	const markupEmpty = {};
	const tableArr = [new Table({}, markup), new Table({}, markupEmpty)];
	const tableProps = ['body', 'head', 'foot'];

	describe('empty markup call to properties check', () => {
		const table = tableArr[1];
		it('column', () => {
			const column = table.body.column();
			const cells = column.cells();
			expect(column).to.be.an.instanceOf(Object).and.to.have.property('cells');
			expect(cells).to.be.an.instanceOf(Array).with.lengthOf(0);
		});
		it('row', () => {
			const row = table.body.row();
			const cells = row.cells();
			expect(row).to.be.an.instanceOf(Object).and.to.have.property('cells');
			expect(cells).to.be.an.instanceOf(Array).with.lengthOf(0);
		});
		it('cell', () => {
			tableProps.forEach((prop) => {
				expect(table[prop].cell(0, 0)).to.be.an.instanceOf(Object);
			});
		});
	});
	describe('normal markup call to properties check', () => {
		const table = tableArr[0];
		it('column', () => {
			const column = table.body.column(0);
			expect(column).to.be.an.instanceOf(Object).and.to.have.property('cells');
			expect(column.cells()).to.be.an.instanceOf(Array).with.lengthOf(4);
		});
		it('row', () => {
			const row = table.body.row(0);
			expect(row).to.be.an.instanceOf(Object).and.to.have.property('cells');
			expect(row.cells()).to.be.an.instanceOf(Array).with.lengthOf(2);
		});
		// it('cell', () => {
		// 	tableProps.forEach((prop) => {
		// 		const cell = table[prop].cell(0, 0);
		// 		prop === 'foot' ?
		// 			expect(cell).to.be.null :
		// 			expect(cell).to.be.an.instanceOf(Object).and.to.have.property('model');
		// 	});
		// });
	});
});