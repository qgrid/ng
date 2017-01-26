import Directive from '../directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from '../../../definition';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
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
