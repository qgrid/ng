import { map as getColumnMap } from '../column/column.service';
import { nodeBuilder } from '../node';

export function groupPipe(memo, context, next) {
	const model = context.model;

	if (memo.rows.length) {
		const dataState = model.data();
		const groupState = model.group();

		const build = nodeBuilder(
			getColumnMap(dataState.columns),
			groupState.by,
			context.valueFactory
		);

		const memoRows = memo.rows;
		const dataRows = dataState.rows;
		memo.nodes = build(memoRows, i => {
			const row = memoRows[i];
			const index = dataRows.indexOf(row);
			return index < 0 ? i : index;
		});
	}
	
	next(memo);
}