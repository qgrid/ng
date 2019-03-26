import PluginComponent from '../plugin.component';
import {Action} from '@grid/core/action';
import {Command} from '@grid/core/command';
import {Composite} from '@grid/core/infrastructure/composite';
import {PersistenceService} from '@grid/core/persistence/persistence.service';
import {PersistenceView} from '../../../plugin/persistence/persistence.view';

const Plugin = PluginComponent('persistence', {
	inject: ['qgrid', '$mdPanel', '$document']
});

class Persistence extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const model = this.model;

		const id = `q-grid:${model.grid().id}:persistence-list`;
		model.persistence({id});
		model.persistence().storage
			.getItem(id)
			.then(items => {
				if (!items || items.length === 0) {
					return [];
				}
				const defaultItem = items.find(item => item.isDefault);
				if (defaultItem) {
					const persistenceService = new PersistenceService(model);
					persistenceService.load(defaultItem.model);
				}
				return items;
			});

		const action =
			new Action(
				new Command({
					source: 'persistence',
					execute: e => {
						if (!e) {
							e = {
								target: this.$element[0]
							};
						}

						const mdPanel = this.$mdPanel;
						const position = mdPanel.newPanelPosition()
							.relativeTo(e.target)
							.addPanelPosition(mdPanel.xPosition.ALIGN_START, mdPanel.yPosition.ALIGN_TOPS);


						const persistenceView = new PersistenceView(model);
						const config = {
							attachTo: angular.element(this.$document[0].body), // eslint-disable-line no-undef
							controller: ['$scope', function ($scope) {
								$scope.$persistence = persistenceView;
							}],
							templateUrl: 'qgrid.plugin.persistence-panel.tpl.html',
							panelClass: 'q-grid-persistence-panel',
							position: position,
							locals: {
								view: persistenceView
							},
							openFrom: e,
							clickOutsideToClose: true,
							escapeToClose: false,
							focusOnOpen: false,
							zIndex: 2
						};

						mdPanel.open(config)
							.then(mdPanelRef => {
								const close = () => mdPanelRef.close();
								this.using(persistenceView.closeEvent.on(close));
							});
					},
					//	shortcut: 'ctrl+shift+h'
				}),
				'Save/Load',
				'history'
			);

		this.model.action({
			items: Composite.list([action], this.model.action().items)
		});
	}
}

export default Persistence.component({
	controller: Persistence,
	controllerAs: '$persistencePlugin'
});