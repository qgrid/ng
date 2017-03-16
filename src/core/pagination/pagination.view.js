import View from 'core/view/view';

export default class PaginationView extends View {
	constructor(model) {
		super(model);

		model.dataChanged.watch(e => {
			if (e.hasChanges('rows')) {
				model.pagination({
					current: 0
				});
			}
		});
	}

	get current(){
		return this.model.pagination().current;
	}

	get size(){
		return this.model.pagination().size;
	}
}