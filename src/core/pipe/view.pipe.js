import {Scene} from '../scene';

export function viewPipe(memo, context, next) {
	const model = context.model;
	const scene = new Scene(model);

	const rows = scene.rows(memo);
	const columnLine = scene.columnLine(memo.columns);

	model.view({
		rows: rows,
		columns: columnLine.map(c => c.model),
		nodes: memo.nodes,
		pivot: memo.pivot
	}, {
		source: context.source || 'view.pipe',
		behavior: 'core'
	});

	model.scene({
		rows: rows,
		column: {
			rows: scene.columnRows(memo.columns),
			area: scene.columnArea(memo.columns),
			line: columnLine
		}
	}, {
		source: context.source || 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}