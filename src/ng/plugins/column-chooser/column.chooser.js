import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import Node from 'core/node/node'
import {COLUMNCHOOSER_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';
import {isObject} from 'core/services/utility';

TemplatePath
	.register(COLUMNCHOOSER_NAME, () => {
		return {
			model: 'columnchooser',
			resource: 'content'
		};
	});

class ColumnChooser extends PluginComponent('qgrid.plugins.columnchooser.tpl.html') {
	constructor() {
		super(...arguments);
		this.toggle = new Command({
			execute: (node) => true,
			canExecute: (node) => !node.children.length
		});

	}
	onInit() {
	}

	get columns(){
		return this.model.data().columns;
	}

	get resource() {
		return this.model.visibility().resource;
	}
}

export default ColumnChooser.component({
	controller: ColumnChooser,
	controllerAs: '$columnChooser'
});