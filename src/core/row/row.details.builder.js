import RowDetails from './row.details';

export default function rowDetailsBuilder(mode) {

	return (rows) => {
		if (mode !== 'details'){
			return [];
		}

		return rows.map(row => {
			return new RowDetails(row);
		});
	};
}