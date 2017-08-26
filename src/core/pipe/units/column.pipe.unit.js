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
		const scene = new Scene(model);
		const columnLine = scene.columnLine(memo.columns);

		model.view({
			columns: columnLine.map(c => c.model)
		}, {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		});

		context.model.scene({
			column: {
				rows: scene.columnRows(memo.columns),
				area: scene.columnArea(memo.columns),
				line: columnLine
			}
		}, {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		});

		next(memo);
	}
];