import {PluginView} from '../plugin.view';
import {Event, EventListener, EventManager} from '@grid/core/infrastructure';
import {GRID_PREFIX} from '@grid/core/definition';
import {Command} from '@grid/core/command/command';

export class ColumnSortView extends PluginView {
	constructor(model, context) {
		super(model);

		this.column = context.column;

		const element = this.element;
		const view = context.view;
		this.using(model.sortChanged.watch(e => {
			if (e.hasChanges('by')) {
				if (view.sort.order(this.column) >= 0) {
					element.classList.add(`${GRID_PREFIX}-active`);
				}
				else {
					element.classList.remove(`${GRID_PREFIX}-active`);
				}
			}
		}));

		this.toggle = new Command({
			canExecute: this.column.canSort,
			execute: () => view.sort.toggle.execute(this.column)
		});

		const listener = new EventListener(element, new EventManager(this));
		this.using(listener.on('click', e => {
			if (this.toggle.canExecute()) {
				this.toggle.execute();
			}
		}));
	}
}
