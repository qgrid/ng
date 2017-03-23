import View from 'core/view/view';
import {Monitor} from 'core/services/style';
import * as columnService from 'core/column/column.service';

export default class StyleView extends View {
	constructor(model, table, valueFactory) {
		super(model);

		this.markup = table.markup;
		this.valueFactory = valueFactory;

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
			const valueFactory = this.valueFactory;
			const model = this.model;
			const styleState = model.style();
			const dataRows = model.view().rows;
			const bodyRows = markup.body.rows;
			const rowMonitor = this.monitor.row;
			const cellMonitor = this.monitor.cell;
			const columns = columnService.lineView(model.view().columns).map(c => c.model);
			const columnMap = columnService.map(columns);
			// TODO: improve perfomance
			const value = (row, column) => {
				return valueFactory(column)(row);
			};

			for (let i = 0, rowsLength = bodyRows.length; i < rowsLength; i++) {
				const bodyRow = bodyRows[i];
				const dataRow = dataRows[i];

				const domRow = rowMonitor.enter(bodyRow);
				try {
					styleState.row(
						dataRow,
						domRow, {
							row: i,
							value: value,
							columns: {
								map: columnMap,
								list: columns
							}
						});
				}
				finally {
					rowMonitor.exit(domRow);
				}

				const cells = bodyRow.cells;
				for (let j = 0, cellsLength = cells.length; j < cellsLength; j++) {
					const cell = cells[j];
					const column = columns[j];
					const domCell = cellMonitor.enter(cell);
					try {
						styleState.cell(
							dataRow,
							column,
							domCell, {
								row: i,
								column: j,
								value: value,
								columns: {
									map: columnMap,
									list: columns
								}
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