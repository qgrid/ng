import {flatView as nodeFlatView, Node} from '../node';
import {Scene} from '../scene';
import {lineView} from '../column/column.service';

export function viewPipe(memo, context, next) {
	const model = context.model;
	const rows = buildRows(memo);
	const columns = buildColumns(memo);

	model.view({
		rows: rows,
		columns: columns,
		nodes: memo.nodes,
		pivot: memo.pivot
	}, {
		source: context.source || 'view.pipe',
		behavior: 'core'
	});

	const scene = new Scene(model);
	model.scene({
		rows: scene.rows(rows),
		columns: scene.columns(memo.columns),
		area: scene.area(memo.columns)
	}, {
		source: context.source || 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}

export function buildRows(memo) {
	const nodes = memo.nodes;
	const rows = memo.rows;
	if (nodes.length) {
		if (!(rows.length && rows[0] instanceof Node)) {
			return nodeFlatView(nodes);
		}
	}

	return rows;
}

export function buildColumns(memo) {
	return lineView(memo.columns)
		.map(column => column.model);
}