import PluginComponent from '../plugin.component';
import {Action} from '@grid/core/action';
import {Command} from '@grid/core/command';
import {Composite} from '@grid/core/infrastructure/composite';
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
		const persistenceView = new PersistenceView(model);

		const actions = [
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
								persistenceView.title = persistenceView.stringify({model: persistenceView.persistenceService.save()});
								const close = () => mdPanelRef.close();
								this.using(persistenceView.closeEvent.on(close));
							});
					},
					//	shortcut: 'ctrl+shift+h'
				}),
				'Load/Save',
				'history'
			)
		];

		persistenceView.model
			.action({
				items: Composite.list([actions, model.action().items])
			});
	}
}

export default Persistence.component({
	controller: Persistence,
	controllerAs: '$persistencePlugin'
});