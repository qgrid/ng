import {isArray} from '@grid/core/utility';

function getAllKeys(items) {
	const itemsMap = new Map();
	for (let item of items) {
		for (let [prop, value] of Object.entries(item)) {
			if (!itemsMap.has(prop)) {
				itemsMap.set(prop, value);
			}
		}
	}
	return itemsMap.keys();
}

export class Json {
	read(data) {
		const columns = [];
		const rows = JSON.parse(data);
		if (isArray(rows)) {
			for (let i = 0; i < rows.length; i++) {
				rows[i].rowNum = i;
			}

			const headers = getAllKeys(rows);
			for (let header of headers) {
				let column = {
					key: header,
					title: header
				};
				if (header === 'rowNum') {
					column = {
						key: 'rowNum',
						title: '',
						pin: 'left',
						canEdit: false,
						canFocus: false,
						type: 'row-number'
					};
				}
				columns.push(column);
			}
			return {
				rows: rows,
				columns: columns
			};
		}
	}
}