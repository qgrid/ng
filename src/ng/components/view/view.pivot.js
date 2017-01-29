export default class ViewPivot {
	constructor(view) {
		this.view = view;
	}

	get rows() {
		const state = this.view.model.view();
		const pivot = state.pivot;
		if (pivot) {
			return pivot.rows;
		}

		return [];
	}

	get heads() {
		const state = this.view.model.view();
		const pivot = state.pivot;
		if (pivot) {
			return pivot.headers;
		}

		return [];
	}
}