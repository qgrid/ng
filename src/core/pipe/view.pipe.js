import {flatView as nodeFlatView, Node} from '../node';
import {Renderer} from '../scene';
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

	const render = new Renderer(model);
	model.scene({
		rows: render.rows(rows),
		columns: render.columns(memo.columns)
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