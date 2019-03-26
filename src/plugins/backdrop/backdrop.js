import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import {BackdropView} from '@grid/plugin/backdrop/backdrop.view';

class Backdrop extends Component {
	constructor($element, $document) {
		super();

		this.document = $document[0];
		this.element = $element[0];
	}

	onInit() {
		const backdrop = new BackdropView(this);
		this.using(backdrop.closeEvent.on(this.onCloseCore.bind(this)));
	}

	onCloseCore(e) {
		const apply = this.$view.root.applyFactory(null, 'sync');
		apply(() => this.onClose({$event: e}));
	}
}

Backdrop.$inject = ['$element', '$document'];

export default {
	transclude: true,
	templateUrl: 'qgrid.plugin.backdrop.tpl.html',
	controller: Backdrop,
	controllerAs: '$backdropPlugin',
	require: {
		$view: `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		'onClose': '&',
		'onKeyDown': '&',
		'propagate': '@'
	}
};
