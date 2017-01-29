import Directive from '../directive';
import EventListener from 'core/infrastructure/event.listener';
import {GRID_NAME, DROP_NAME, CAN_DROP_NAME, DROP_EFFECT_NAME, ON_DROP_NAME} from 'src/definition';

class Drop extends Directive(DROP_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
	}

	onInit() {
		this.element.classList.add('can-drop');
		this.listener.on('dragenter', this.enter);
		this.listener.on('dragover', this.over);
		this.listener.on('dragleave', this.leave);
		this.listener.on('drop', this.drop);
	}

	onDestroy() {
		this.element.classList.remove('can-drop');
		this.listener.off();
	}

	drop(e) {
		e.stopPropagation();

		this.element.classList.remove('dragover');
		const event = this.event(e.dataTransfer)
		if (this.canDrop(event)) {
			this.$scope.$evalAsync(() => this.onDrop(event));
		}

		return false;
	}

	enter(e) {
		e.preventDefault();

		this.element.classList.add('dragover');
		e.dataTransfer.dropEffect = this.effect || 'move';
		return false;
	}

	over(e) {
		e.preventDefault();

		e.dataTransfer.dropEffect =
			this.element.classList.contains('drag')
				? 'none' : this.effect || 'move';

		return false;
	}

	leave() {
		this.element.classList.remove('dragover');
	}

	event(transfer) {
		const source = transfer.getData(`application/x-${GRID_NAME}+json`);
		const target = this.transfer();

		return {
			$event: {
				source: JSON.parse(source), // eslint-disable-line angular/json-functions
				target: target
			}
		};
	}
}

Drop.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {
		'transfer': `&${DROP_NAME}`,
		'onDrop': `&${ON_DROP_NAME}`,
		'canDrop': `&${CAN_DROP_NAME}`,
		'effect': `@${DROP_EFFECT_NAME}`
	},
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
};