import Directive from '../directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'src/definition';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
	}

	get templateUrl(){
		return 'qgrid.body.group.tpl.html';
	}

	get rows() {
		const view = this.view.model.view();
		const pivot = view.pivot;
		if(pivot){
			return pivot.rows;
		}

		return [];
	}
}

BodyCore.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};
