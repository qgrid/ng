import RowDetailsNode from './row.details.node';

export function expandView(rows, result = []) {

	rows.forEach((node) => {
		result.push(node);
		if (node.type === 'row' && node.state.expand) {
			result.push(new RowDetailsNode(node.row, 'details'));
		}
	});

	return result;
}