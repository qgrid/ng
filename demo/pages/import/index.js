import XLSX from 'xlsx';

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const model = qgrid.model();
	this.model = model;
	model.scroll({
		mode: 'virtual'
	});

	model.plugin({
		imports: {
			'xlsx': XLSX
		}
	});
}