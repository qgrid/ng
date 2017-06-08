export class Json {
	read(data) {
		const columns = [{
			key: 'rowNum',
			title: '',
			pin: 'left',
			canEdit: false,
			canFocus: false,
			type: 'row-number'
		}];
		const rows = JSON.parse(data);
		for (let i = 0; i < rows.length; i++) {
			rows[i].rowNum = i;
		}

		const headers = Object.keys(rows[0]);
		for (let header of headers) {
			columns.push({
				key: header,
				title: header
			});
		}
		return {
			rows: rows,
			columns: columns
		};
	}
}