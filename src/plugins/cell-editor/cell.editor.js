import {EventListener, EventManager} from '@grid/core/infrastructure';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor($element) {
		super();

		const element = $element[0];
		this.listener = new EventListener(element, new EventManager(this));
	}

	onInit() {
		const edit = this.$view.edit.cell;

		this.using(this.listener.on('keydown', e => {
			if (!edit.shortcut.keyDown(e)) {
				e.stopPropagation();
			}
		}));
	}

	close() {
		this.onClose();
	}
}

CellEditor.$inject = ['$element'];

export default {
	transclude: true,
	require: {
		$view: `^^${VIEW_CORE_NAME}`
	},
	templateUrl: 'qgrid.plugin.cell-editor.tpl.html',
	controller: CellEditor,
	controllerAs: '$editor',
	bindings: {
		'onClose': '&'
	}
};
