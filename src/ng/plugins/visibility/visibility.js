import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import Node from 'core/node/node'
import {VISIBILITY_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';
import {isObject, cloneDeep} from 'core/services/utility';

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

				// Trigger change event for the visibility model
				// TODO: trigger only changed parts
				const visibility = this.model.visibility;
				visibility(cloneDeep(visibility()));
			},
			canExecute: (node) => !node.children.length
		});
	}

	build(graph) {
		const nodes = [];
		for (let [key, value] of Object.entries(graph())) {
			if (key === 'resource') {
				continue;
			}

			const node = new Node(key);
			node.setValue = value => graph()[key] = value;
			if (isObject(value)) {
				node.children = this.build(() => graph()[key]);
			} else {
				node.value = value;
			}

			nodes.push(node);
		}

		return nodes;
	}

	onInit() {
		this.items = this.build(() => this.model.visibility());
	}

	get resource() {
		return this.model.visibility().resource;
	}
}

export default Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
});