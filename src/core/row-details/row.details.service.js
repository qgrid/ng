import {RowDetails} from '../row.details';
import {RowDetailsStatus} from './row.details.status';

export function flatView(rows, status) {
	const result = [];

	rows.forEach(row => {
		result.push(row);
		const state = status.get(row);
		if (state && state instanceof RowDetailsStatus && state.expand) {
			result.push(new RowDetails(row));
		}
	});

	return result;
}