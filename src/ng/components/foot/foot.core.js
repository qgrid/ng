import Directive from '../directive';
import {VIEW_CORE_NAME, FOOT_CORE_NAME} from '../../../definition';

class FootCore extends Directive(FOOT_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
	}

	get count() {
		const state = this.view.model.foot();
		return state.count;
	}
}

FootCore.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$foot',
	controller: FootCore,
	require: FootCore.require,
	link: FootCore.link
};