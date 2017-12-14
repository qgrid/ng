import Directive from './directive';
import {POSITION_NAME, GRID_NAME} from '@grid/view/definition';
import {PositionView} from '@grid/plugin/position/position.view';
import {AppError} from '@grid/core/infrastructure';

class Position extends Directive(POSITION_NAME, {root: `^?${GRID_NAME}`}) {
	constructor($element, $attrs) {
		super();

		const element = $element[0];
		this.position = new PositionView({
			element,
			targetName: $attrs[POSITION_NAME]
		});

		const width = parseInt($attrs.maxWidth);
		if (isNaN(width)) {
			throw new AppError('position', 'max-width is required');
		}

		const height = parseInt($attrs.maxHeight);
		if (isNaN(height)) {
			throw new AppError('position', 'max-height is required');
		}

		this.position.invalidate(width, height);
		element.style.display = 'block';
	}

	onDestroy() {
		this.position.dispose();
	}
}

Position.$inject = ['$element', '$attrs'];

export default {
	restrict: 'A',
	controllerAs: '$position',
	controller: Position,
	require: Position.require,
	link: Position.link,
	scope: false
};