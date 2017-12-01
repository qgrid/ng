import Directive from './directive';
import {POSITION_NAME, GRID_NAME} from '@grid/view/definition';
import {PositionView} from '@grid/plugin/position/position.view';

class Position extends Directive(POSITION_NAME, {root: `^?${GRID_NAME}`}) {
	constructor($element, $attrs, $window) {
		super();

		this.position = new PositionView({
			element: $element[0],
			window: $window,
			targetName: $attrs[POSITION_NAME]
		});
	}

	onInit() {
		this.position.invalidate();
	}

	onDestroy() {
		this.position.dispose();
	}
}

Position.$inject = ['$element', '$attrs', '$window'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$position',
	controller: Position,
	require: Position.require,
	link: Position.link,
	scope: false
};