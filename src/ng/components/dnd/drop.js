import Directive from '../directive';
import {GRID_NAME, DROP_NAME, CAN_DROP_NAME, DROP_EFFECT_NAME, ON_DROP_NAME} from 'src/definition';

class Drop extends Directive(DROP_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
	}

	onInit() {
		const element = this.element;

		element.classList.add('can-drop');
		element.addEventListener('dragenter', this.enter.bind(this), false);
		element.addEventListener('dragover', this.over.bind(this), false);
		element.addEventListener('dragleave', this.leave.bind(this), false);
		element.addEventListener('drop', this.drop.bind(this), false);
	}

	onDestroy() {
		const element = this.element;

		element.classList.remove('can-drop');
		element.removeEventListener('drop');
		element.removeEventListener('dragenter');
		element.removeEventListener('dragover');
		element.removeEventListener('dragleave');
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
		e.dataTransfer.dropEffect = 'move';
		return false;
	}

	over(e) {
		e.preventDefault();

		e.dataTransfer.dropEffect = 'move';
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