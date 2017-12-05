import { PipeUnit as PU, PipeUnit } from '../pipe/pipe.unit';
import { uniq } from '../utility';

const schema = new Map([
	[PipeUnit.view, PipeUnit.default],
	[PipeUnit.column, PipeUnit.view]
]);

const isUseless = (set, unit) => {
	while (unit = schema.get(unit)) {
		if (set.has(unit)) {
			return true;
		}
	}

	return false;
};

export class PipeModel {
	constructor() {
		this.reduce = units => {
			units = Array.from(units);
			units.reverse();
			units = uniq(units);
			const set = new Set(units);

			return units.reduce((memo, unit) => {
				if (!isUseless(set, unit)) {
					memo.push(unit);
				}

				return memo;
			}, []);
		};

		this.triggers = {
			'data': {
				'rows': PU.default,
				'columns': PU.column
			},
			'pagination': {
				'current': PU.default,
				'size': PU.Default
			},
			'sort': {
				'by': PU.default
			},
			'filter': {
				'by': PU.default,
				'unit': PU.column
			},
			'group': {
				'by': PU.default
			},
			'pivot': {
				'by': PU.default
			},
			'columnList': {
				'index': PU.column
			},
			'row': {
				'status': PU.rowDetails
			},
			'selection': {
				'mode': PU.column,
				'unit': PU.column
			}
		};
	}
}