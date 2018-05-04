import { Guard } from '../infrastructure/guard';

export function memoPipe(memo, context, next) {
	Guard.notNull(memo, 'memo');

	next({
		rows: memo,
		pivot: { heads: [], rows: [] },
		nodes: []
	});
}