import Directive from '../directive';
import {VIEW_CORE_NAME, HEAD_CORE_NAME} from '../../../definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
	}
}

HeadCore.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};