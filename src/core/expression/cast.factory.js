import {AppError} from '../infrastructure';

function getType(type) {
	return {}.toString.call(type).slice(8, -1);
}

export function castFactory(r) {
	const rt = getType(r);
	const asString = '' + r;
	const asNumber = +r;
	const asBool = !!r;
	const asDate = new Date(r);

	return l => {
		const lt = getType(l);
		if (rt === lt) {
			return r;
		}

		switch (lt) {
			case 'Number':
				return asNumber;
			case 'String':
				return asString;
			case 'Date':
				return asDate;
			case 'Boolean':
				return asBool;
			default:
				throw AppError(
					'cast.factory',
					`Unsupported format ${lt}`
				);
		}
	};
}
