export function flatView(nodes, result = []) {
	for (let i = 0, length = nodes.length; i < length; i++) {
		const node = nodes[i];
		result.push(node);
		if (node.state.expand) {
			flatView(node.children, result);
		}
	}
	return result;
}