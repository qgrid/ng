import Directive from '@grid/view/directives/directive';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {TAB_TRAP_IN_NAME, TAB_TRAP_NAME} from '../definition';

class TabTrapIn extends Directive(TAB_TRAP_IN_NAME, {tabTrap: `^^${TAB_TRAP_NAME}`}) {
	constructor($element, $attrs) {
		super();

		const element = $element[0];
		this.element = element;
		this.target = $attrs[TAB_TRAP_IN_NAME];

		element.tabIndex = 0;

		const listener = new EventListener(element, new EventManager(this));
		this.using(listener.on('focus', () => this.tabTrap.activate(this.target)));
	}

	onInit() {
		this.tabTrap.traps.set(this.target, this);
	}

	focus() {
		this.element.focus();
	}
}

TabTrapIn.$inject = ['$element', '$attrs'];

export default {
	restrict: 'A',
	controller: TabTrapIn,
	controllAs: '$tabTrap',
	require: TabTrapIn.require,
	link: TabTrapIn.link
};