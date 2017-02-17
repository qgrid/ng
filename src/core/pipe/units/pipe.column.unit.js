import pipeColumn from '../pipe.column';

export default [
	(memo, context, next) => {
		const view = context.model.view();
		next({
			rows: view.rows,
			pivot: view.pivot,
			nodes: view.nodes
		});
	},
	pipeColumn,
	(memo, context, next) => {
		context.model.view({
			columns: memo.columns
		});

		next(memo);
	}
];