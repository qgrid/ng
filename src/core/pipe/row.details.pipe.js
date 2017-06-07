import {rowDetailsBuilder} from '../row-details';

export function rowDetailsPipe(memo, context, next) {
	const model = context.model;
	const mode = model.row().mode;

	const build = rowDetailsBuilder(mode);

	memo.rowDetails = build(memo.rows);
	next(memo);
}