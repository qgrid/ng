import View from 'core/view/view';
import EditCellView from './edit.cell.view';

export default class EditView extends View {
	constructor(model, setValue, table, apply) {
		super(model);

		this.cell = new EditCellView(model, setValue, table, apply);
	}

	onDestroy() {
		this.cell.destroy();
	}
}