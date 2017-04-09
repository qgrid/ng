import View from 'core/view/view';
import columnFactory from 'core/column/column.factory';

export default class ColumnView extends View {
	constructor(model) {
		super(model);

		const factory = columnFactory(model);

		// this should be first place(with column.pipe) where columns are processed
		model.dataChanged.watch(e => {
			if (e.hasChanges('columns')) {
				e.state.columns.forEach(c => factory(c.type || 'text', c));
			}
		});
	}
}
