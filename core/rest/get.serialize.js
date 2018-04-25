export function serialize(model) {
	const paginationState = model.pagination();
	const sortState = model.sort();
	const filterState = model.filter();

	return {
		order: sortState.by
			.map(item => {
				const field = Object.keys(item)[0];
				const order = item[field];
				return `${order === 'asc' ? '+' : '-'}${field}`;
			})
			.join(','),
		filter: Object
			.keys(filterState.by)
			.map(field => `${field}=in:${filterState.by[field].items.join(',')}`)
			.join(';'),
		skip: paginationState.current * paginationState.size,
		take: paginationState.size
	};
}
