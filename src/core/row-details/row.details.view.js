import View from 'core/view/view';
import Command from 'core/infrastructure/command';
// import * as columnService from 'core/column/column.service';
// import * as sortService from 'core/sort/sort.service';
// import HighlightBehavior from './behaviors/highlight.behavior';
// import cellSelector from './cell.selector';
// import {noop} from 'core/services/utility';
// import {GRID_PREFIX} from 'core/definition';

export default class RowDetailsView extends View {
	constructor(model, markup) {
		super(model);

		this.markup = markup;
		this.toggleExpand = new Command({
			execute: (item, state) => {
				
			}
		});
	}
}