import {flatView as nodeFlatView} from 'core/node/node.service';
import {flatView as rowDetailsFlatView} from 'core/row/row.service';

export default function pipeView(memo, context, next) {
	const model = context.model;

	let rows = memo.rows;
	if (memo.nodes.length) {
		rows =  nodeFlatView(memo.nodes);
	} else if (memo.rowDetails.length) {
		rows = rowDetailsFlatView(memo.rowDetails);
	}

	model.view({
		rows: rows,
		nodes: memo.nodes,
		pivot: memo.pivot,
		columns: memo.columns
	}, {
		source: 'view.pipe',
		behavior: 'core'
	});

	next(memo);
}