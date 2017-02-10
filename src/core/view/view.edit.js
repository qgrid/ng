import View from './view';
import EditCellView from './view.edit.cell';

export default class EditView extends View {
	constructor(model, setValue) {
		super(model);

		this.cell = new EditCellView(model, setValue);
	}
}