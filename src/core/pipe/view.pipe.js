import {flatView as nodeFlatView} from 'core/node/node.service';
import {expandView as expandNodeView} from 'core/row/row.details.service';

export default function pipeView(memo, context, next) {
	const model = context.model;

	let rows = memo.rows;
	if (memo.nodes.length) {
		rows =  nodeFlatView(memo.nodes);
	} else if (memo.rowDetails.length) {
		rows = expandNodeView(memo.rowDetails);
	}

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns,
		rowDetails: memo.rowDetails
	}, {
		source: 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}