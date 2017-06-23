Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const model = qgrid.model();
	this.model = model;

	// model.scroll({
	// 	mode: 'virtual'
	// });

	model.data({
		pipe: [(data, context, next) => {
			const skip = model.fetch().skip;
			const take = model.pagination().size;

			const dataState = model.data();
			const rows = dataState.rows.slice(skip, skip + take);
			const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			for (let i = rows.length; i < take; i++) {
				const row = {};
				for (let j = 0; j < alphabet.length; j++) {
					row[alphabet[j]] = '';
				}
				rows.push(row);
			}

			next(rows);
		}]
			.concat(qgrid.pipeUnit.view)
	});

	model.style({
		// row: (row, context) => {
		// 	if (row.gender === 'female') {
		// 		context.class(`female-row-${this.femaleColor}`, {background: '#' + this.femaleColor});
		// 	}
		//
		// 	if (row.gender === 'male') {
		// 		context.class(`male-row-${this.maleColor}`, {background: '#' + this.maleColor});
		// 	}
		// },
		cell: (row, column, context) => {
			const focusState = model.focus();
			if (context.row === focusState.rowIndex && context.column === 0) {
				context.class('focused-row-header');
			}

		}
	});
}