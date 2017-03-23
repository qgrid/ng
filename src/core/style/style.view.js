import View from 'core/view/view';
import {Monitor} from 'core/services/style';
import * as columnService from 'core/column/column.service';

export default class StyleView extends View {
	constructor(model, table) {
		super(model);

		this.markup = table.markup;
		this.monitor = {
			row: new Monitor(model),
			cell: new Monitor(model)
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
			const rowMonitor = this.monitor.row;
			const cellMonitor = this.monitor.cell;
			const columns = columnService.lineView(model.view().columns);

			for (let i = 0, rowsLength = bodyRows.length; i < rowsLength; i++) {
				const bodyRow = bodyRows[i];
				const dataRow = dataRows[i];

				const domRow = rowMonitor.enter(bodyRow);
				try {
					styleState.row(
						dataRow,
						domRow, {
							row: i
						});
				}
				finally {
					rowMonitor.exit(domRow);
				}

				const cells = bodyRow.cells;
				for(let j = 0, cellsLength = cells.length; j < cellsLength; j++){
					const cell = cells[j];
					const domCell = cellMonitor.enter(cell);
					try {
						styleState.cell(
							dataRow,
							columns[j].model,
							domCell,
							{
								row: i,
								column: j
							});
					}
					finally {
						cellMonitor.exit(domCell);
					}
				}
			}
		}
	}
}