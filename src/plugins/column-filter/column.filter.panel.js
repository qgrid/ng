import PluginComponent from '../plugin.component';
import {uniq, noop, flatten} from '@grid/core/utility';
import {ColumnFilterView} from '@grid/plugin/column-filter/column.filter.view';

const Plugin = PluginComponent('column-filter-panel', {inject: ['$scope', 'vscroll', '$filter', 'qgrid']});
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.vscrollContext = this.vscroll({
			fetch: (skip, take, d) => {
				if (!this.isReady()) {
					d.resolve(0);
					return;
				}

				const columnFilter = this.columnFilter;

				const model = this.model;
				const filterState = model.filter();
				const service = this.qgrid.service(model);
				if (filterState.fetch !== noop) {
					const cancelBusy = service.busy();
					filterState
						.fetch(columnFilter.key, {
							value: columnFilter.getValue,
							skip: skip,
							take: take,
							filter: columnFilter.filter
						})
						.then(items => {
							columnFilter.items.push(...items);
							d.resolve(columnFilter.items.length + take);
							cancelBusy();
						})
						.catch(cancelBusy);
				}
				else {
					const cancelBusy = service.busy();
					try {
						if (!columnFilter.items.length) {
							const source = model[model.columnFilter().source];
							let items = source().rows.map(columnFilter.getValue);
							if (columnFilter.column.type === 'array') {
								items = flatten(items);
							}

							const uniqItems = uniq(items);
							const filteredItems = this.$filter('filter')(uniqItems, columnFilter.filter);
							filteredItems.sort(columnFilter.column.compare);
							columnFilter.items = filteredItems;
						}

						d.resolve(columnFilter.items.length);
					}
					finally {
						cancelBusy();
					}
				}
			},

		});
	}

	onInit() {
		const context = {
			key: this.key
		};

		this.vscrollContext.threshold = this.model.columnFilter().threshold;

		const columnFilter = new ColumnFilterView(this.model, context);
		this.columnFilter = columnFilter;

		this.using(columnFilter.submitEvent.on(this.onSubmit));
		this.using(columnFilter.cancelEvent.on(this.onCancel));
		this.using(columnFilter.resetEvent.on(this.reset.bind(this)));

		this.$scope.$columnFilterPanel = columnFilter;

		this.reset();
	}

	reset() {
		this.columnFilter.items = [];
		this.vscrollContext.container.reset();
	}
}

export default ColumnFilterPanel.component({
	controller: ColumnFilterPanel,
	controllerAs: '$columnFilterPanelPlugin',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<'
	}
});