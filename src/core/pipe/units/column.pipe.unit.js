import {Pipe} from '../pipe';
import {Scene} from '../../scene';
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
		const columns = buildColumns(memo);

		model.view({
			columns: columns
		}, {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		});

		const scene = new Scene(model);
		context.model.scene({
			columns: scene.columns(memo.columns),
			area: scene.area(memo.columns)
		}, {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		});

		next(memo);
	}
];