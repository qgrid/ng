import {AppError} from '../infrastructure';
import * as Convert from '../services/convert';

export function castFactory(r) {
	const rt = typeof r,
		asString = '' + r,
		asNumber = +r,
		asDate = new Date(r);

	return l => {
		const lt = Convert.getType(l);
		if (rt === lt) {
			return r;
		}

		switch (lt) {
			case 'number':
				return asNumber;
			case 'text':
				return asString;
			case 'date':
				return asDate;
			default:
				throw AppError(
					'cast.factory',
					`Unsupported format ${lt}`
				);
		}
	};
}