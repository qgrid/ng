import fileSaver from 'file-saver';
import XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autotable from 'jspdf-autotable';

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	this.rows = [];

	this.model = qgrid.model();
	this.model.plugin({
		imports: {
			'file': fileSaver,
			'xlsx': XLSX,
			'pdf': jsPDF,
			'autotable': autotable
		}
	});

	$http.get('data/people/100.json')
		.then(response => {
			this.rows = response.data;
		});
}