import View from 'core/view/view';
import Command from 'core/infrastructure/command';
// import * as columnService from 'core/column/column.service';
// import * as sortService from 'core/sort/sort.service';
import RowDetailsBehavior from './behaviors/row.details.behavior';
import rowSelector from './row.selector';
// import {noop} from 'core/services/utility';
// import {GRID_PREFIX} from 'core/definition';

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