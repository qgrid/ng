import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import { expandView } from './row.details.service';

export default class RowDetailsView extends View {
	constructor(model) {
		super(model);

		this.toggleStatus = new Command({
			execute: (row) => {
				row.state.expand = !row.state.expand;
				const view = model.view;
				const rowDetails = view().rowDetails;
				view({rows: expandView(rowDetails)});
			},
			canExecute: (row) => {
				return row.type === 'row';
			}
		});
	}

	status(row) {
		return row.state.expand ? 'expand' : 'collapse';
	}
}