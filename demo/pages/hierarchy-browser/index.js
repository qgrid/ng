Controller.$inject = ['qgrid', '$timeout'];
export default function Controller(qgrid, $timeout) {
	const gridModel = qgrid.model();
	const gridService = qgrid.service(gridModel);
	this.gridModel = gridModel;

	const root = new qgrid.Node('root', 0);
	root.isVisited = false;
	const tree = [root];
	const treePipe = (memo, context, next) => {
		memo.nodes = tree;
		next(memo);
	};

	gridModel
		.data({
			columns: [{
				title: 'Name',
				key: 'group',
				type: 'group'
			}],
			pipe: [
				qgrid.pipe.memo,
				treePipe,
				qgrid.pipe.column,
				qgrid.pipe.view
			]
		})
		.group({
			toggle: new qgrid.Command({
				execute: node => {
					if (node.isVisited) {
						return;
					}

					node.isVisited = true;
					const length = Math.floor(Math.random() * 9 + 1);
					const level = node.level + 1;
					$timeout(() => {
						node.children = Array.from(new Array(length), (x, i) => {
							const child = new qgrid.Node(`node[${level},${i}]`, level);
							child.isVisited = false;
							return child;
						});

						gridService.invalidate();
					}, 500);
				}
			})
		})
		.selection({
			mode: 'single',
			unit: 'row',
			area: 'custom'
		});
}