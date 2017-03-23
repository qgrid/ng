import View from 'core/view/view';
import {Monitor} from 'core/services/style';

export default class StyleView extends View {
	constructor(model, table) {
		super(model);

		this.markup = table.markup;
		this.monitors = {
			row: new Monitor(model)
		};

		model.viewChanged.watch(() => {
			this.invalidate();
		});

		model.styleChanged.watch(() => {
			this.invalidate();
		});
	}

	invalidate() {
		const markup = this.markup;
		if (markup.body) {
			const model = this.model;
			const styleState = model.style();
			const dataRows = model.view().rows;
			const bodyRows = markup.body.rows;
			const rowMonitor = this.monitors.row;
			for (let i = 0, rowsLength = bodyRows.length; i < rowsLength; i++) {
				const bodyRow = bodyRows[i];
				const dataRow = dataRows[i];

				const domRow = rowMonitor.enter(bodyRow);
				try {
					styleState.row(dataRow, domRow, {index: i});
				}
				finally {
					rowMonitor.exit(domRow);
				}
			}
		}
	}
}