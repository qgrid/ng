import {View} from '../view';
import {Command} from '../infrastructure';
import {expandView} from './row.details.service';

export class RowDetailsView extends View {
	constructor(model) {
		super(model);

		this.toggleStatus = new Command({
			execute: (row) => {
				row.state.expand = !row.state.expand;
				const view = model.view;
				const rowDetails = view().rowDetails;
				view({rows: expandView(rowDetails)});
			},
			canExecute: row => row.type === 'row'
		});
	}

	status(row) {
		return row.state.expand ? 'expand' : 'collapse';
	}
}