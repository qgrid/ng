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

class Visibility extends PluginComponent('qgrid.plugins.visibility.tpl.html') {
	constructor() {
		super(...arguments);
		this.toggle = new Command({
			execute: (key, parentKey = null) => {
				if (parentKey) {
					this.model.visibility()[parentKey][key] = !this.model.visibility()[parentKey][key];
				} else {
					this.model.visibility()[key] = !this.model.visibility()[key];
				}
			},
			canExecute: (key) => !isObject(this.model.visibility()[key])
		});
		this.build = (graph) => {
			let nodes = [];
			for (let [key, value] of Object.entries(graph)) {
				let node = new Node(key);
				if (isObject(value)) {
					node.children = node.children.concat(this.build(value));
				}
				nodes.push(node);
			}
			return nodes;
		};

	}

	get items() {
		let data = this.model.visibility(),
			items = Object.assign({}, data);
		for (let [key, value] of Object.entries(items)) {
			if (key === 'resource') {
				delete items[key];
			}
		}
		return this.build(items);
	}

	get resource() {
		return this.model.visibility().resource;
	}

	itemModel(key, parentKey = null) {
		return parentKey ? this.model.visibility()[parentKey][key] : this.model.visibility()[key];
	}
}

export default Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
});