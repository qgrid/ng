import Component from '@grid/view/components/component';
import TemplateLink from '@grid/view/components/template/template.link';
import * as def from '../definition';
import {Shortcut, ShortcutManager} from '@grid/core/shortcut';
import {PopupCommandManager} from './popup.command.manager';
import {EventListener, EventManager} from '@grid/core/infrastructure';

class PopupBody extends Component {
	constructor($scope, $element, $compile, $templateCache, qGridPopupService) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.qGridPopupService = qGridPopupService;
		this.$templateScope = null;
		this.template = new TemplateLink($compile, $templateCache);
		this.listener = new EventListener($element[0], new EventManager(this));
	}

	onInit() {
		this.$popup = this.popup;
		this.shortcut = new Shortcut(new ShortcutManager());
		this.commandManager = new PopupCommandManager(f => f(), this.qGridPopupService.get(this.id));
		this.listener.on('keydown', e => this.shortcut.keyDown(e));

		const model = this.model;
		const templateUrl = 'qgrid.plugin.popup-body.tpl.html';
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			model.popup().resource,
			[`${this.id}:body`]
		);

		link(this.$element, templateScope);
		this.$templateScope = templateScope;
	}

	registerShortcuts(commands) {
		return this.shortcut.register(this.commandManager, commands);
	}

	onDestroy() {
		this.listener.off();
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}
	}

	close() {
		this.popup.close();
	}
}

PopupBody.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'qGridPopupService'
];

export default {
	controller: PopupBody,
	controllerAs: '$popupBody',
	require: {
		popup: `^^${def.POPUP_PANEL_NAME}`
	},
	bindings: {
		model: '<',
		id: '<'
	}
};