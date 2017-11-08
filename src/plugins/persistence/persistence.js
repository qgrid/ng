import PluginComponent from '../plugin.component';
import {
	Action
} from '@grid/core/action';
import {
	Command
} from '@grid/core/command';
import {
	PersistencePanelController
} from './persistence.panel';

const Plugin = PluginComponent('persistence', {
	inject: ['qgrid', '$mdPanel', '$document']
});

class Peresistence extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const model = this.model;

		const actions = [
			new Action(
				new Command({
					execute: (e) => {
						const mdPanel = this.$mdPanel;
						const position = mdPanel.newPanelPosition()
							.relativeTo(e.target)
							.addPanelPosition(mdPanel.xPosition.ALIGN_START, mdPanel.yPosition.ALIGN_TOPS);

						const config = {
							attachTo: angular.element(this.$document[0].body), // eslint-disable-line no-undef
							controller: PersistencePanelController,
							controllerAs: '$persistence',
							templateUrl: 'qgrid.plugin.persistence-panel.tpl.html',
							panelClass: 'q-grid-persistence-panel',
							position: position,
							locals: {
								model: model
							},
							openFrom: e,
							clickOutsideToClose: true,
							escapeToClose: true,
							focusOnOpen: false,
							zIndex: 2
						};

						mdPanel.open(config);
					},
					shortcut: 'F4'
				}),
				'Load/Save',
				'history'
			)
		];

		model
			.action({
				items: actions.concat(model.action().items)
			});
	}
}

export default Peresistence.component({
	controller: Peresistence,
	controllerAs: '$persistence',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&'
	}
});