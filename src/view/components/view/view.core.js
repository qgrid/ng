import Component from '../component';
import {GRID_NAME, TH_CORE_NAME} from '@grid/view/definition';
import {Vscroll} from '@grid/view/services';
import {jobLine} from '@grid/core/services';
import {viewFactory} from '@grid/core/view/view.factory';
import {GridCommandManager} from '../grid/grid.command.manager';
import {Log} from '@grid/core/infrastructure';

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
		const selectors = {th: TH_CORE_NAME};

		// TODO: somehow try to aggregates view.style without jumpings
		const invalidate = () => {
			const style = this.style;
			if (style.needInvalidate()) {
				const rowMonitor = style.monitor.row;
				const cellMonitor = style.monitor.cell;

				const domCell = cellMonitor.enter();
				const domRow = rowMonitor.enter();
				try {
					style.invalidate(domCell, domRow);
				}
				finally {
					rowMonitor.exit();
					cellMonitor.exit();
				}
			}
		};

		this.invoke = model.scroll().mode !== 'virtual'
			? f => f()
			: f => {
				f();
				invalidate();
			};

		this.apply = this.root.applyFactory(null, 'sync');

		this.commandManager = new GridCommandManager(this.apply, this.invoke, table);
		model.action({manager: this.commandManager});

		const injectViewServicesTo = viewFactory(
			model,
			table,
			this.commandManager,
			gridService,
			vscroll,
			selectors
		);

		this.destroyView = injectViewServicesTo(this);

		// TODO: how we can avoid that?
		this.$scope.$watch(() => {
			if (model.scene().status === 'stop') {
				invalidate();
			}
		});

		this.watch(gridService);
	}

	watch(service) {
		const invalidateJob = jobLine(10);
		const sceneJob = jobLine(10);
		const model = this.model;
		const triggers = model.data().triggers;

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

		invalidateJob(() => service.invalidate('grid'));
		Object.keys(triggers)
			.forEach(name =>
				this.using(model[name + 'Changed']
					.watch(e => {
						const changes = Object.keys(e.changes);
						if (e.tag.behavior !== 'core' && triggers[name].find(key => changes.indexOf(key) >= 0)) {
							invalidateJob(() => service.invalidate(name, e.changes));
						}
					})));

		model.sceneChanged.watch(e => {
			if (e.hasChanges('round')) {
				Log.info(e.tag.source, `scene ${e.state.round}`);

				if (e.state.status === 'start') {
					sceneJob(() => {
						Log.info(e.tag.source, 'scene stop');

						this.apply(() =>
							model.scene({
								round: 0,
								status: 'stop'
							}, {
								source: 'view.core',
								behavior: 'core'
							}));
					});
				}
			}
		});
	}

	onDestroy() {
		super.onDestroy();
		this.destroyView();
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