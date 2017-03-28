import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import RowDetailsBehavior from './behaviors/row.details.behavior';
import rowSelector from './row.selector';

export default class RowDetailsView extends View {
	constructor(model, markup) {
		super(model);

		this.markup = markup;
		this.behavior = new RowDetailsBehavior(model, rowSelector(model, markup));
		
		this.toggleStatus = new Command({
			execute: (row) => {
				this.behavior.toggle(row);
			}
		});
	}

	status(row) {
		return this.behavior.state(row) ? 'expand' : 'collapse';
	}
}