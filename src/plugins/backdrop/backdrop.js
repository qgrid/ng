import Component from '../../view/components/component';
import {EventListener, EventManager} from '@grid/core/infrastructure';

class Backdrop extends Component {
	constructor($element, $document) {
		super();

		const document = $document[0];
		const element = $element[0];
		const listener = new EventListener(element, new EventManager(this));

		this.using(listener.on('click', e => {
			e.stopPropagation();
			element.remove();

			if (this.propagate !== false) {
				const target = document.elementFromPoint(e.clientX, e.clientY);
				target.click();
			}

			this.onClose({$event: e});
		}));

		this.using(listener.on('keydown', e => {
			this.onKeyDown({$event: e});
		}));
	}
}

Backdrop.$inject = ['$element', '$document'];

export default {
	transclude: true,
	templateUrl: 'qgrid.plugin.backdrop.tpl.html',
	controller: Backdrop,
	controllerAs: '$backdrop',
	bindings: {
		'onClose': '&',
		'onKeyDown': '&',
		'propagate': '@'
	}
};
