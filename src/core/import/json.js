import {isArray} from '@grid/core/utility';

export class Json {
	read(data) {
		const rows = JSON.parse(data);
		if (isArray(rows)) {
			return rows;
		}
		return [];
	}
}