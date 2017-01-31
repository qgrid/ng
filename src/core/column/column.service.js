export function map(columns) {
	return columns.reduce((memo, column) => {
		memo[column.key] = column;
		return memo;
	}, {});
}

export function view(columns, model) {
	const groupBy = new Set(model.group().by);
	const pivotBy = new Set(model.pivot().by);
	return columns.filter(c => !groupBy.has(c.model.key) && !pivotBy.has(c.model.key));
}