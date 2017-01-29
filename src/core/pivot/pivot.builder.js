import {identity, uniq, groupBy} from 'core/services/utility';
import pivot from './pivot';
import view from './pivot.view';

function build(pivot, columnMap, pivotBy, valueFactory, level = 0) {
	const key = pivotBy[0];
	const column = columnMap[key];
	const getValue = valueFactory(column);

	return pivot({
		factory: row => ({}),
		selector: row => [getValue(row)],
		name: identity,
		value: (parent, row, pivot) => {
			const nextPivotBy = pivotBy.slice(1);
			if(nextPivotBy.length) {
				return build(
					pivot,
					columnMap,
					nextPivotBy,
					valueFactory,
					level + 1)(row);
			}

			return true;
		}
	});
}

export default function pivotBuilder(columnMap, pivotBy, valueFactory) {
	let doPivot = null;
	if (pivotBy.length) {
		doPivot =
			build(
				pivot,
				columnMap,
				pivotBy,
				valueFactory);
	}

	return rows => {
		if (doPivot) {
			const data = doPivot(rows);
			return view(data);
		}

		return null;
	};
}