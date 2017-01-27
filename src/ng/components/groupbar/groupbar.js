import PluginComponent from '../plugin.component';
import Command from '../../../core/infrastructure/command'

class Groupbar extends PluginComponent('qgrid.groupbar.tpl.html') {
	constructor() {
		super(...arguments);

		this.add = new Command({
				execute: () => {
					const group = this.model.group;
					const state = group();
					group({
						by: state.by.concat('foo')
					});
				},
				canExecute: () => this.columns.length > 0
			}
		);

		this.remove = new Command({
			execute: key => {
				const group = this.model.group;
				const state = group();
				const index = state.by.findIndex(g => g === key);
				if(index >= 0){
					group({
						by: state.by.slice().splice(index, 1)
					});
				}
			}
		});
	}

	get resource() {
		return this.model.group().resource;
	}

	get columns() {
		return this.model.view().columns;
	}

	get groups(){
		return this.model.grooup().by;
	}
}

export default Groupbar.component({
	controller: Groupbar,
	controllerAs: '$groupbar'
});