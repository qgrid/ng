import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/command';
import {Node} from '@grid/core/node';
import * as path from '@grid/core/services/path';
import * as ng from '@grid/view/services/ng';
import {VISIBILITY_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {isObject, cloneDeep} from '@grid/core/utility';

TemplatePath
	.register(VISIBILITY_NAME, () => {
		return {
			model: 'visibility',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('visibility');
class Visibility extends Plugin {
	constructor() {
		super(...arguments);
		this.toggle = new Command({
			source: 'visibility',
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
		const visibility = this.model.visibility;
		const visibilityState = cloneDeep(visibility());
		Object.keys(this.$attrs)
			.filter(key => !ng.isSystem(key) && key !== 'model')
			.forEach(attr => {
				const accessor = path.compile(attr);
				accessor(visibilityState, this.$attrs[attr] === 'true');
			});

		visibility(visibilityState);
		this.items = this.build(() => visibility());
	}

	get resource() {
		return this.model.visibility().resource;
	}
}

export default Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
});