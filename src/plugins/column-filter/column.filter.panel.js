import PluginComponent from '../plugin.component';
import { uniq, noop, flatten } from '@grid/core/utility';
import { ColumnFilterView } from '@grid/plugin/column-filter/column.filter.view';

const Plugin = PluginComponent('column-filter-panel', { inject: ['$scope', 'vscroll', '$filter', 'qgrid'] });
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.search = '';
		this.vscrollContext = this.vscroll({
			fetch: (skip, take, d) => {
				if (!this.isReady()) {
					d.resolve(0);
					return;
				}

				const columnFilter = this.columnFilter;
				// We need to close `items` to make reset work properly
				const items = columnFilter.items;

				const model = this.model;
				const filterState = model.filter();
				const service = this.qgrid.service(model);
				if (filterState.fetch !== noop) {
					const cancelBusy = service.busy();

					filterState
						.fetch(columnFilter.key, {
							take,
							skip,
							value: columnFilter.getValue,
							filter: this.search
						})
						.then(page => {
							items.push(...page);
							d.resolve(items.length + (page.length === take ? take : 0));
							cancelBusy();
						})
						.catch(cancelBusy);
				}
				else {
					const cancelBusy = service.busy();
					const isBlank = model.filter().assertFactory().isNull;
					try {
						if (!items.length) {
							const source = model[model.columnFilter().source];
							let items = source().rows.map(columnFilter.getValue);
							if (columnFilter.column.type === 'array') {
								items = flatten(items);
							}

							const uniqItems = uniq(items);
							const notBlankItems = uniqItems.filter(x => !isBlank(x));
							const filteredItems = this.$filter('filter')(notBlankItems, this.search);

							filteredItems.sort(columnFilter.column.compare);
							columnFilter.items = filteredItems;
							columnFilter.hasBlanks =
								notBlankItems.length !== uniqItems.length &&
								(!this.search || 'blanks'.indexOf(this.search.toLowerCase()) >= 0);
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