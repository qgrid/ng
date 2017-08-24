import {flatView as nodeFlatView, Node} from '../node';

export function viewPipe(memo, context, next) {
	const model = context.model;
	const rows = buildRows(memo);

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns
	}, {
		source: context.source || 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}

function buildRows(memo){
	const nodes = memo.nodes;
	const rows = memo.rows;
	if(nodes.length){
		if(!(rows.length && rows[0] instanceof Node)){
			return nodeFlatView(nodes);
		}
	}

	return rows;
}