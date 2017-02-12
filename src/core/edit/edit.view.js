import View from 'core/view/view';
import EditCellView from './edit.cell.view';

export default class EditView extends View {
	constructor(model, setValue) {
		super(model);

		this.cell = new EditCellView(model, setValue);
	}
}