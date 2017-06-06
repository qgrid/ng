// function plug(size) {
// 	const rows = [];
// 	const columns = [];
// 	const letters = 'ABCDEFGHIJKLM'.split('');
// 	const emptyRow = {};
// 	for (let letter of letters) {
// 		emptyRow[letter] = '';
// 		columns.push({
// 			key: letter,
// 			title: letter
// 		});
// 	}
// 	for (let i = 0; i < size; i++) {
// 		rows.push(emptyRow);
// 	}
//
// 	return {
// 		rows: rows,
// 		columns: columns
// 	};
// }

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	ctrl.model = qgrid.model();
	// const size = ctrl.model.pagination().size;
	ctrl.model
		.scroll({
			mode: 'virtual'
		});
		// .data({
		// 	rows: plug(size).rows,
		// 	columns:plug(size).columns
		// });

}