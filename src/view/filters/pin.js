import {PadColumn} from '@grid/core/column-type';

export default function pin(columns, pin) {
	const result = columns.filter(c => c.model.pin === pin);
	// if (pin) {
	// 	result.push(new PadColumn(PadColumn.model({key: `$pad-${pin}`})));
	// }

	return result;
}