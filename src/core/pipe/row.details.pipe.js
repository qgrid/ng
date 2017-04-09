import rowDetailsBuilder from 'core/row/row.details.builder';

export default function pipRowDetails(memo, context, next) {
	const model = context.model;
	const mode = model.row().mode;

	const build = rowDetailsBuilder(mode);

	memo.rowDetails = build(memo.rows);
	next(memo);
}