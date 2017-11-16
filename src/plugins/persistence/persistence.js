import PluginComponent from '../plugin.component';
import {Action} from '@grid/core/action';
import {Command} from '@grid/core/command';
import {PersistencePanelController} from './persistence.panel';
import {PersistenceService} from '@grid/core/persistence/persistence.service';

const Plugin = PluginComponent('persistence', {
	inject: ['qgrid', '$mdPanel', '$document']
});

class Persistence extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const model = this.model;
		const storageKey = `q-grid:${model.grid().id}:${model.persistence().id}:persistence-list`;

		model.persistence()
			.storage
			.getItem(storageKey)
			.then(items => {
				items = items || [];
				const isDefault = items.find(item => item.default);
				if (isDefault) {
					const persistenceService = new PersistenceService(model);
					persistenceService.load(isDefault.model);
				}
			});

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
								model: model,
								storageKey: storageKey
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

export default Persistence.component({
	controller: Persistence,
	controllerAs: '$persistence',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&'
	}
});