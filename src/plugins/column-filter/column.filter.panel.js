import PluginComponent from '../plugin.component';
import {uniq, noop, flatten} from '@grid/core/utility';
import {ColumnFilterView} from '@grid/plugin/column-filter/column.filter.view';

const Plugin = PluginComponent('column-filter-panel', {inject: ['vscroll', '$filter', 'qgrid']});
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const context = {
			key: this.key
		};

		const columnFilter = new ColumnFilterView(this.model, context);
		this.using(columnFilter.submitEvent.on(this.onSubmit));
		this.using(columnFilter.cancelEvent.on(this.onCancel));
		this.using(columnFilter.resetItemsEvent.on(this.onResetItems));

		this.$scope.$columnFilterPanel = columnFilter;

		this.vscrollContext = this.vscroll({
			fetch: (skip, take, d) => {
				if (!this.isReady()) {
					d.resolve(0);
					return;
				}

				const model = this.model;
				const filterState = model.filter();
				const service = this.qgrid.service(model);
				if (filterState.fetch !== noop) {
					const cancelBusy = service.busy();
					filterState
						.fetch(this.key, {
							value: columnFilter.getValue,
							skip: skip,
							take: take,
							filter: this.filter
						})
						.then(items => {
							this.items.push(...items);
							d.resolve(this.items.length + take);
							cancelBusy();
						})
						.catch(cancelBusy);
				}
				else {
					const cancelBusy = service.busy();
					try {
						if (!this.items.length) {
							const source = model[model.columnFilter().source];
							let items = source().rows.map(columnFilter.getValue);
							if (this.column.type === 'array') {
								items = flatten(items);
							}

							const uniqItems = uniq(items);
							const filteredItems = this.$filter('filter')(uniqItems, this.filter);
							filteredItems.sort();
							this.items = filteredItems;
						}

						d.resolve(this.items.length);
					}
					finally {
						cancelBusy();
					}
				}
			}
		});

		this.vscrollContext.settings.threshold = this.model.columnFilter().threshold;
		this.onResetItems();
	}

	onResetItems() {
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