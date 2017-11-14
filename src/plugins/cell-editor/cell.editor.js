import {EventListener, EventManager} from '@grid/core/infrastructure';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import {Shortcut, ShortcutManager} from '@grid/core/shortcut';
import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		if(this.shortcut) {
			// Create a local shortcut service to work directly with edit commands
			const shortcut = new Shortcut(new ShortcutManager());
			const $view = this.$view;
			const edit = $view.edit.cell;
			const element = this.element;

			this.using(shortcut.register(edit.commandManager, edit.commands));

			const listener = new EventListener(element, new EventManager(this, $view.root.applyFactory(null, 'sync')));
			this.using(listener.on('keydown', e => {
				if (shortcut.keyDown(e)) {
					e.stopPropagation();
					e.stopImmediatePropagation();
				}
			}));
		}
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
