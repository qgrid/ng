import {Pipe} from '../pipe';
import {Renderer} from '../../scene';
import {buildColumns} from '../view.pipe';

export const columnPipeUnit = [
	(memo, context, next) => {
		const view = context.model.view();
		next({
			rows: view.rows,
			pivot: view.pivot,
			nodes: view.nodes
		});
	},
	Pipe.column,
	(memo, context, next) => {
		const model = context.model;
		model.view({
			columns: buildColumns(memo)
		}, {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		});

		const render = new Renderer(model);
		context.model.scene({
			columns: render.columns(memo.columns)
		}, {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		});

		next(memo);
	}
];