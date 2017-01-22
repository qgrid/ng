import Directive from '../directive';
import {GRID_NAME, HEAD_CORE_NAME} from '../../../definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor() {
		super();

	}

	onInit() {
		//const head = this.root.model.head();
	}
}

HeadCore.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link
};