import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import Node from 'core/node/node'
import {VISIBILITY_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';
import {isObject} from 'core/services/utility';

TemplatePath
	.register(VISIBILITY_NAME, () => {
		return {
			model: 'visibility',
			resource: 'content'
		};
	});

class Visibility extends PluginComponent('visibility') {
	constructor() {
		super(...arguments);
		this.toggle = new Command({
			execute: (node) => {
				node.value = !node.value;
				node.setValue(node.value);
			},
			canExecute: (node) => !node.children.length
		});

		this.build = (graph) => {
			let nodes = [];
			for (let [key, value] of Object.entries(graph)) {
				let node = new Node(key);
				node.setValue = value => {
					graph[key] = value;
				};
				if (isObject(value)) {
					node.children = node.children.concat(this.build(value));
				} else {

					node.value = value;
				}
				if (key !== 'resource') {
					nodes.push(node);
				}
			}
			return nodes;
		};

	}

	onInit() {
		this.items = this.build(this.model.visibility());
	}

	get resource() {
		return this.model.visibility().resource;
	}
}

export default Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
});