import {View} from '../view';
import {PipeUnit} from '../pipe/units';

export class ColumnView extends View {
	constructor(model, service) {
		super(model);

		model
			.columnListChanged
			.watch(e => {
					if (e.hasChanges('columns') || e.hasChanges('generation')) {
						service.invalidate('column.view', e.changes, PipeUnit.column);
					}
				}, 'core');
	}
}