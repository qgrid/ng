import View from 'core/view/view';
import {Monitor} from 'core/services/style';
import * as columnService from 'core/column/column.service';

export default class StyleView extends View {
	constructor(model, table, valueFactory) {
		super(model);

		this.table = table;
		this.markup = table.markup;
		this.valueFactory = valueFactory;
		this.active= {
			row: false,
			cell: false
		};

		this.monitor = {
			row: new Monitor(model),
			cell: new Monitor(model)
		};

		model.viewChanged.watch(() => {
			this.invalidate();
		});

		model.styleChanged.watch(e => {
			if (e.hasChanges('row')) {
				this.active.row = true;
			}

			if (e.hasChanges('cell')) {
				this.active.cell = true;
			}

			this.invalidate();
		});
	}

	invalidate() {
		const active = this.active;
		if (!(active.row || active.cell)) {
			return;
		}

		const markup = this.markup;
		if (markup.body) {
			const valueFactory = this.valueFactory;
			const model = this.model;
			const styleState = model.style();
			const dataRows = model.view().rows;
			const bodyRows = markup.body.rows;
			const rowMonitor = this.monitor.row;
			const cellMonitor = this.monitor.cell;
			const columns = this.table.data.columns();
			const columnMap = columnService.map(columns);
			// TODO: improve perfomance
			const value = (row, column) => {
				return valueFactory(column)(row);
			};
			const domCell = cellMonitor.enter();
			const domRow = rowMonitor.enter();
			try {
				for (let i = 0, rowsLength = Math.min(bodyRows.length, dataRows.length); i < rowsLength; i++) {
					const dataRow = dataRows[i];
					const bodyRow = bodyRows[i];

					if(active.row) {
						const rowContext = {
							class: domRow(bodyRow),
							row: i,
							value: value,
							columns: {
								map: columnMap,
								list: columns
							}
						};

						styleState.row(dataRow, rowContext);
					}

					if(active.cell) {
						const cells = bodyRow.cells;
						for (let j = 0, cellsLength = cells.length; j < cellsLength; j++) {
							const cell = cells[j];
							const column = columns[j];
							const cellContext = {
								class: domCell(cell),
								row: i,
								column: j,
								value: value,
								columns: {
									map: columnMap,
									list: columns
								}
							};

							styleState.cell(dataRow, column, cellContext);
						}
					}
				}
			}
			finally {
				rowMonitor.exit(domRow);
				cellMonitor.exit(domCell);
			}
		}
	}
}