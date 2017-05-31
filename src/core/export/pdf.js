import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {flattenObject} from './export.common';

export class Pdf {
	write(rows, columns, name) {
		const titles = [];
		const values = [];
		const doc = new jsPDF({orientation: 'landscape'});
		const tableOptions = {
			styles: {
				overflow: 'linebreak',
				fontSize: 8,
				columnWidth: 'auto',
				overflowColumns: true
			},
			headerStyles:{
				overflow: 'ellipsize',
			},
			pageBreak: 'auto',
			margin: 0
		};
		for (let column of columns) {
			titles.push({title: column.title, dataKey: column.path});
		}
		for (let row of rows) {
			values.push(flattenObject(row));
		}

		doc.autoTable(titles, values, tableOptions);
		doc.save(`${name}.pdf`);
	}
}