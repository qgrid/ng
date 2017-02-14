import pipeColumn from '../pipe.column';

export default [
	(memo, context, next) => {
		next(context.model.view());
	},
	pipeColumn,
	(memo, context, next) => {
		context.model.view({
			columns: memo.columns
		});

		next(memo);
	}
];