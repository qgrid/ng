import { View } from '../view/view';

export class HeadCtrl extends View {
	constructor(model, view) {
		super(model);

		this.view = view;
	}
}