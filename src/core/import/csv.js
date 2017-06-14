function arrayToObj(array) {
	const result = {};
	for (let i = 0; i < array.length; i++) {
		result['' + i] = array[i];
	}
	return result;
}

function traverse(row) {
	const result = [];
	let word = '';
	let dbq = false;
	for (let i = 0; i < row.length; i++) {
		switch (row[i]) {
			case ',': {
				if (dbq) {
					word += row[i];
				} else {
					result.push(word);
					word = '';
				}
				break;
			}
			case '"': {
				if (i === 0 || i > 0 && row[i - 1] === ',') {
					dbq = true;
				}
				if (i === row.length - 1 || i < row.length - 1 && row[i + 1] === ',') {
					dbq = false;
				}
				break;
			}
			default: {
				word += row[i];
				if (i === row.length - 1) {
					result.push(word);
				}
			}
		}
	}
	return arrayToObj(result);
}

export class Csv {
	read(data) {
		const rowsData = data.split(/\r\n|\n/);
		const rows = [];
		for (let row of rowsData) {
			rows.push(traverse(row));
		}
		return rows;
	}
}