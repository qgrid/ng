import Directive from '../directive';
import {TABLE_CORE_NAME, VIEW_CORE_NAME, VIEWPORT_CORE_NAME} from '../../../definition';

class TableCore extends Directive(TABLE_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`, viewport: `^^${VIEWPORT_CORE_NAME}`}) {
	constructor($element) {
		super();

		this.$element = $element;
	}

	onInit() { }
}

TableCore.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$table',
	controller: TableCore,
	require: TableCore.require,
	link: TableCore.link,
	scope: {}
};