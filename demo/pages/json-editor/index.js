import angular from 'angular';

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
		memo.nodes = [tree.build(memo.rows, 'human')];
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


	this.enterCommand = new qgrid.Command({
		canExecute: cell => {
			const node = cell.row;
			switch (cell.column.key) {
				case 'key':
					return node.kind === 'array' || node.kind === 'object' || node.kind === 'property';
				case 'value':
					return node.type === 'value';
			}

			return false;
		}
	});

	this.value = (node, value) => {
		if (angular.isUndefined(value)) {
			return node.value;
		}

		node.value = value;
	};

	this.key = (node, value) => {
		if (angular.isUndefined(value)) {
			return node.key;
		}

		node.key = value;
	};
}

class Tree {
	constructor(model, Node) {
		this.model = model;
		this.Node = Node;
	}

	build(graph, name = 'root', level = 0, kind) {
		if (angular.isArray(graph)) {
			return this.buildArray(graph, name, level, kind);
		}
		else if (angular.isObject(graph)) {
			return this.buildObject(graph, name, level, kind);
		}

		const node = new this.Node(name, level, 'value');
		node.value = graph;
		node.kind = kind;
		return node;
	}

	buildArray(graph, name, level, kind) {
		const node = new this.Node(name, level);
		node.kind = kind || 'array';
		const nextLevel = level + 1;
		for (let i = 0, length = graph.length; i < length; i++) {
			node.children.push(this.build(graph[i], `${name}[${i}]`, nextLevel, 'item'));
		}

		return node;
	}

	buildObject(graph, name, level, kind) {
		const node = new this.Node(name, level);
		node.kind = kind || 'object';
		const nextLevel = level + 1;
		for (let key of Object.keys(graph)) {
			node.children.push(this.build(graph[key], key, nextLevel, 'property'));
		}
		return node;
	}
}





