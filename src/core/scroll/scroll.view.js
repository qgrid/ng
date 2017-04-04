import View from '../view/view';

export default class ScrollView extends View {
	constructor(model, scroll) {
		super(model);

		const scrollState = model.scroll();
		this.y = {
			context: scroll({
				threshold: scrollState.y.threshold
			})
		};
	}
}