Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const model = qgrid.model();
	const service = qgrid.service(model);

	this.gridModel = model;

	$http.get('data/people/100.json')
		.then(response =>
			model.data({
				rows: response.data
			})
		);

	let shouldExpand = true;
	const toggleAll = nodes => nodes.forEach(node => {
		if (node.type === 'group') {
			node.state.expand = shouldExpand;
			toggleAll(node.children);
		}
	});

	this.toggleCollapse = () => {
		const nodes = model.view().nodes;
		toggleAll(nodes);

		shouldExpand = !shouldExpand;
		service.invalidate('app', {}, qgrid.pipeUnit.group);
	};

	this.groupLabel = node => {
		if (node.type === 'group') {
			return node.key;
		}

		return 'see -->';
	};
}