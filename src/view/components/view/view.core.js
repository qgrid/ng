import Component from '../component';
import { GRID_NAME, TH_CORE_NAME } from '@grid/view/definition';
import { Vscroll } from '@grid/view/services';
import { viewFactory } from '@grid/core/view/view.factory';
import { GridCommandManager } from '../grid/grid.command.manager';
import { ViewCtrl } from '@grid/core/view/view.ctrl';
import { jobLine } from '@grid/core/services/index';
import { Log } from '@grid/core/infrastructure/log';

class ViewCore extends Component {
	constructor($rootScope, $scope, $element, $timeout, grid, vscroll) {
		super();

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.element = $element[0];
		this.$timeout = $timeout;
		this.$postLink = this.build;
		this.serviceFactory = grid.service.bind(grid);
		this.vscroll = vscroll;
	}

	build() {
		const root = this.root;
		const table = root.table;
		const model = this.model;
		const gridService = this.serviceFactory(model);
		const vscroll = new Vscroll(this.vscroll);
		const selectors = { th: TH_CORE_NAME };
		const ctrl = this.ctrl = new ViewCtrl(model, this, gridService);
		const invalidateJob = jobLine(0);
		const sceneJob = jobLine(10);

		this.using(model.selectionChanged.watch(e => {
			if (e.hasChanges('items')) {
				this.root.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e.changes
					}
				});
			}
		}));

		this.invoke = model.scroll().mode !== 'virtual'
			? f => f()
			: f => {
				f();
				invalidateJob(() => ctrl.invalidate());
			};

		this.apply = this.root.applyFactory(null, 'sync');

		const manager = this.commandManager = new GridCommandManager(this.apply, this.invoke, table);
		model.action({ manager });

		const injectViewServicesTo = viewFactory(
			model,
			table,
			manager,
			gridService,
			vscroll,
			selectors
		);

		// TODO: how we can avoid that?
		this.$scope.$watch(() => {
			if (model.scene().status === 'stop') {
				invalidateJob(() => ctrl.invalidate());
			}
		});

		model.sceneChanged.watch(e => {
			if (e.hasChanges('status')) {
				switch (e.state.status) {
					case 'start': {
						model.progress({ isBusy: true });
						break;
					}
					case 'stop': {
						model.progress({ isBusy: false });
						break;
					}
				}
				
				// Run digest on the start of invalidate(e.g. for busy indicator)
				// and on the ned of invalidate(e.g. to build the DOM)
				this.apply(() => Log.info('view.core', `digest for ${e.state.status}`));
			}

			if (e.hasChanges('round')) {
				Log.info('view.core', `scene ${e.state.round}`);

				if (e.state.round > 0 && e.state.status === 'start') {
					sceneJob(() => {
						Log.info(e.tag.source, 'scene stop');

						model.scene({
							round: 0,
							status: 'stop'
						}, {
							source: 'view.ctrl',
							behavior: 'core'
						});
					});
				}
			}
		});

		// Views should be created after `sceneChanged.watch` declaration
		// to persiste the right order of event sourcing.
		this.destroyView = injectViewServicesTo(this);
	}

	onDestroy() {
		super.onDestroy();

		this.destroyView();
		this.ctrl.dispose();
	}

	templateUrl(key) {
		return `qgrid.${key}.tpl.html`;
	}

	get model() {
		return this.root.model;
	}

	get visibility() {
		return this.model.visibility();
	}

	get rows() {
		return this.model.data().rows;
	}
}

ViewCore.$inject = [
	'$rootScope',
	'$scope',
	'$element',
	'$timeout',
	'qgrid',
	'vscroll'
];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
};