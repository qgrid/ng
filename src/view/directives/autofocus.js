import Directive from './directive';
import {AUTOFOCUS_NAME, GRID_NAME} from '@grid/view/definition';
import {AutofocusView} from '@grid/plugin/autofocus/autofocus.view';

class Autofocus extends Directive(AUTOFOCUS_NAME, {root: `${GRID_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
		this.ctrl = new AutofocusView(this.model, this.table, this.markup);
	}

	get markup() {
		return this.root.markup;
	}

	get model() {
		return this.root.model;
	}

	get table() {
		return this.root.table;
	}

	onDestroy() {
		this.ctrl.dispose();
	}
}

Autofocus.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$autofocus',
	controller: Autofocus,
	require: Autofocus.require,
	link: Autofocus.link,
	scope: false
};