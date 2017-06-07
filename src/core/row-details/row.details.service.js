import {Node} from '../node';

export function expandView(rows, result = []) {
	rows.forEach(row => {
		result.push(row);
		if (row.type === 'row' && row.state.expand) {
			result.push(new Node(row.row, 1, 'details'));
		}
	});

	return result;
}