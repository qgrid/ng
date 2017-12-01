import Directive from './directive';
import {POSITION_NAME, GRID_NAME} from '@grid/view/definition';
import {PositionView} from '@grid/plugin/position/position.view';

class Position extends Directive(POSITION_NAME, {root: `^?${GRID_NAME}`}) {
	constructor($element, $attrs, $window) {
		super();

		this.$attrs = $attrs;

		this.position = new PositionView({
			element: $element[0],
			window: $window
		});
		this.using(this.position.invalidateEvent.on(this.invalidate.bind(this)));
	}

	onInit() {
		this.invalidate();
	}

	invalidate() {
		if (this.root) {
			const targetName = this.$attrs[POSITION_NAME];
			this.position.invalidate(targetName);
		}
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