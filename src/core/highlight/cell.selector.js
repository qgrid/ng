import * as columnService from 'core/column/column.service';
import AppError from 'core/infrastructure/error';

export default (model, markup) => {
	function getRows(items) {
		const result = [];
		const rows = model.view().rows;
		
		for (let item of items) {
			const index = rows.indexOf(item);
			if (index > -1 && markup.body.rows[index]) {
				for (let cell of markup.body.rows[index].cells) {
					result.push(cell);
				}
			}
		}

		return result;
	}

	function getColumns(items) {
		const result = [];
		const columns = columnService.lineView(model.view().columns);

		for (let item of items) {
			const index = columns.findIndex((c) => c.model === item);
			if (index > -1) {
				for (let row of markup.body.rows) {
					result.push(row.cells[index]);
				}
			}
		}

		return result;
	}

	function getCells(items) {
		const result = [];
		const rows = model.view().rows;
		const columns = columnService.lineView(model.view().columns);

		for (let item of items) {
			const rowIndex = rows.indexOf(item.row);
			const columnIndex = columns.findIndex((c) => c.model === item.column);

			if (rowIndex > -1 && markup.body.rows[rowIndex]) {
				const row = markup.body.rows[rowIndex];
				if (columnIndex > -1 && row && row.cells[columnIndex]) {
					result.push(row.cells[columnIndex]);
				}
			}
		}

		return result;
	}

	function getMix(items) {
		const itemsArray = Array.from(items);

		const rows = itemsArray.filter(item => item.unit === 'row').map(item => item.item);
		const cells = itemsArray.filter(item => item.unit === 'row').map(item => item.item);

		return [
			...getRows(rows),
			...getCells(cells)
		];
	}

	const selectorMap = {
		'row': getRows,
		'column': getColumns,
		'cell': getCells,
		'mix': getMix,
	};

	return (...args) => {
		const selection = model.selection();
		const cellSelector = selectorMap[selection.unit];
		if (!cellSelector) {
			throw new AppError('cell.selector', `Invalid unit ${selection.unit}`);
		}

		return cellSelector(...args);
	};
};