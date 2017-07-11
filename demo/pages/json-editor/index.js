Controller.$inject = ['$http', 'qgrid'];

export default function Controller($http, qgrid) {
	const ctrl = this;
	const model = ctrl.model = qgrid.model();
	const tree = new Tree(model, qgrid.Node);

	const dataPipe = (data, context, next) => {
		const dataState = context.model.data();
		if (dataState.rows.length) {
			next(dataState.rows);
		}
		else {
			$http.get('data/people/100.json')
				.then(function (response) {
					next(response.data);
				});
		}
	};

	const treePipe = (memo, context, next) => {
		memo.nodes = [tree.build(memo.rows)];
		next(memo);
	};

	model.data({
		pipe: [
			dataPipe,
			qgrid.pipe.memo,
			treePipe,
			qgrid.pipe.column,
			qgrid.pipe.view
		]
	});

	this.value = node => node.value;
}

class Tree {
	constructor(model, Node) {
		this.model = model;
		this.Node = Node;
	}

	build(graph, name = 'root', level = 0) {
		if (angular.isArray(graph)) {
			return this.buildArray(graph, name, level);
		}
		else if (angular.isObject(graph)) {
			return this.buildObject(graph, name, level);
		}

		const node = new this.Node(name, level, 'value');
		node.value = graph;
		return node;
	}

	buildArray(graph, name, level) {
		const node = new this.Node(name, level);
		const nextLevel = level + 1;
		for (let i = 0, length = graph.length; i < length; i++) {
			node.children.push(this.build(graph[i], `${name}[${i}]`, nextLevel));
		}

		return node;
	}

	buildObject(graph, name, level) {
		const node = new this.Node(name, level);
		const nextLevel = level + 1;
		for (let key of Object.keys(graph)) {
			node.children.push(this.build(graph[key], key, nextLevel));
		}
		return node;
	}
}





