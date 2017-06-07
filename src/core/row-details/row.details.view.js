import {View} from '../view';
import {Command} from '../infrastructure';
import {flatView} from './row.details.service';
import {RowDetailsStatus} from './row.details.status';

export class RowDetailsView extends View {
	constructor(model) {
		super(model);

		this.toggleStatus = new Command({
			execute: row => {
				const status = model.row().status;
				if (!status.has(row)) {
					status.set(row, new RowDetailsStatus(true));
				} else {
					status.expand = !status.expand;
				}

				model.view({
						rows: flatView(model.view().rows, status),
						status: new Map(status.entries())
					},
					{
						source: 'row.details.view',
						behavior: 'core'
					});
			}
		});

		model.viewChanged.watch(e => {
			if (e.tag.source !== 'row.details.view') {
				model.view({
						rows: expandView(rows),
						status: new Map(
							model.view()
								.status
								.entries()
								.filter(entry => entry[1] instanceof RowDetailsStatus))
					},
					{
						source: 'row.details.view',
						behavior: 'core'
					});
			}
		});
	}

	status(row) {
		const status = this.model.row().status;
		const state = status.get(row);
		return state && state.expand ? 'expand' : 'collapse';
	}
}