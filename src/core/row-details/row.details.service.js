import {RowDetails} from './row.details';
import {RowDetailsStatus} from './row.details.status';

export function flatView(rows, status) {
	const result = [];

	rows.forEach(row => {
		if (!(row instanceof RowDetails)) {
			const state = status.get(row);
			result.push(row);
			if (state && state instanceof RowDetailsStatus) {
				if (state.expand) {
					result.push(new RowDetails(row));
				}
			}
		}
	});

	return result;
}