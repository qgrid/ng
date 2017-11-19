import Component from '../../view/components/component';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {VIEW_CORE_NAME} from '@grid/view/definition';

class Backdrop extends Component {
	constructor($element, $document) {
		super();

		this.document = $document[0];
		this.element = $element[0];
	}

	onInit() {
		const element = this.element;
		const apply = this.$view.root.applyFactory(null, 'sync');
		const listener = new EventListener(element, new EventManager(this, apply));

		this.using(listener.on('click', e => {
			e.stopPropagation();
			element.remove();

			if (this.propagate !== false) {
				const target = this.document.elementFromPoint(e.clientX, e.clientY); // eslint-disable-line angular/document-service
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
	require: {
		$view: `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		'onClose': '&',
		'onKeyDown': '&',
		'propagate': '@'
	}
};
