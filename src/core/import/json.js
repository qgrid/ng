import {isArray} from '@grid/core/utility';

export class Json {
	read(data) {
		const rows = JSON.parse(data);
		if (isArray(rows)) {
			for (let i = 0; i < rows.length; i++) {
				rows[i].rowNum = i;
			}
			return rows;

		}
		return [];
	}
}