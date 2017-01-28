export function get(row, column) {
	return row.value
		? row.value(column)
		: column.$value
			? column.$value({$row: row})
			: column.value
				? column.value(row)
				: row[column.key];
}

export function getFactory(column) {
	const get = column.$value
		? row => column.$value({$row: row})
		: column.value
			? row => column.value(row)
			: row => row[column.key];

	return row => get(row);
}