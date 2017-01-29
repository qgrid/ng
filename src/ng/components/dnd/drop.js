import Directive from '../directive';
import {DROP_NAME} from 'src/definition';

class Drop extends Directive(DROP_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		const element = this.element;

		element.classList.add('can-drop');
		element.addEventListener('drop', this.drop.bind(this), false);
		element.addEventListener('dragenter', this.enter.bind(this), false);
		element.addEventListener('dragover', this.over.bind(this), false);
		element.addEventListener('dragleave', this.leave.bind(this), false);
	}

	onDestroy() {
		const element = this.element;

		element.classList.remove('can-drop');
		element.removeEventListener('drop');
		element.removeEventListener('dragenter');
		element.removeEventListener('dragover');
		element.removeEventListener('dragleave');
	}

	drop(){
		this.element.classList.remove('dragover');
	}

	enter() {
		this.element.classList.add('dragover');
	}

	over(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}

		e.dataTransfer.dropEffect = 'move';
		return false;
	}

	leave() {
		this.element.classList.remove('dragover');
	}
}

Drop.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
};