import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
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
			execute: column => column.isVisible = !this.state(column),
		});
	}

	onInit() {

	}

	state(column){
		return column.isVisible !== false;
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