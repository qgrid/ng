import { View } from '../view/view';
import { PathService } from '../path';

export class HeadCtrl extends View {
	constructor(model, view, bag) {
		super();

		this.view = view;
		this.bag = bag;
		this.column = null;

		// model.sceneChanged.watch(e => {
		// 	if (e.hasChanges('status')) {
		// 		if (this.column) {
		// 			view.highlight.column.execute(this.column, false);
		// 			this.column = null;
		// 		}
		// 	}
		// });
	}

	onMouseMove(e) {
		const highlight = this.view.highlight;
		if (!highlight.column.canExecute()) {
			return;
		}

		const pathFinder = new PathService(this.bag.head);
		const cell = pathFinder.cell(e.path);
		if (cell) {
			if (this.column !== cell.column) {
				if (this.column) {
					highlight.column.execute(this.column, false);
				}

				this.column = cell.column;
				highlight.column.execute(this.column, true);
			}
		}
	}

	onMouseLeave() {
		if (this.column) {
			this.view.highlight.column.execute(this.column, false);
			this.column = null;
		}
	}
}