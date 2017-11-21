import {Resource} from '../resource';
import {Command} from '../command';

export class EditModel {
	constructor() {
		this.resource = new Resource();
		this.mode = null; // cell | row
		this.state = 'view'; // view | edit
		this.enter = new Command();
		this.commit = new Command();
		this.cancel = new Command();
		this.reset = new Command();
		this.clear = new Command();

		this.cancelShortcuts = {
			'$default': 'escape'
		};

		this.enterShortcuts = {
			'$default': '*',
			'row': 'F2|Enter',
			'form': 'F2|Enter'
		};

		this.commitShortcuts = {
			'$default': 'tab|shift+tab|enter|ctrl+s',
			'reference': 'ctrl+s',
			'email': 'ctrl+s|enter',
			'url': 'ctrl+s|enter',
			'row': 'ctrl+s',
			'form': 'ctrl+s',
			'select': 'space|enter',
			'bool': 'tab|shift+tab|left|right|up|down|home|end|pageUp|pageDown'
		};
	}
}