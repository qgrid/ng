import {EventListener, EventManager} from '@grid/core/infrastructure';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import {Shortcut, ShortcutManager} from '@grid/core/shortcut';
import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor($element) {
		super();

		const element = $element[0];
		this.listener = new EventListener(element, new EventManager(this));
	}

	onInit() {
		// Create a local shortcut service to work directly with edit commands
		const shortcut = new Shortcut(new ShortcutManager());
		const edit = this.$view.edit.cell;

		this.using(shortcut.register(edit.commandManager, edit.commands));

		this.using(this.listener.on('keydown', e => {
			if (!shortcut.keyDown(e)) {
				e.stopPropagation();
				e.stopImmediatePropagation();
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
