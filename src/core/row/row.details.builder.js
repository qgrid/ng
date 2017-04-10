import RowDetailsNode from './row.details.node';

export default function rowDetailsBuilder(mode) {

	return (rows) => {
		const result = [];
		if (mode !== 'details'){
			return result;
		}

		rows.forEach(row => {
			result.push(new RowDetailsNode(row));
		});

		return result;
	};
}