import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import Node from 'core/node/node'
import {VISIBILITY_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';

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
			canExecute: (key) => typeof this.model.visibility()[key] != "object"
		});
		this.iterate = (obj) => {
			let nodes = [];
			for (let [property, value] of Object.entries(obj)) {
				let node = new Node(property);
				if (typeof obj[property] == "object") {
					node.children = node.children.concat(this.iterate(value));
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
		console.log(this.iterate(items));
		return this.iterate(items);
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