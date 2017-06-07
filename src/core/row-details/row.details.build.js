import {Node} from '../node';

export function rowDetailsBuilder(mode) {
	if (mode !== 'details') {
		return () => [];
	}

	return rows => rows.map(row => new Node(row, 0, 'row'));
}