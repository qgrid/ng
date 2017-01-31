export default class ViewPivot {
	constructor(view) {
		this.view = view;
	}

	get rows() {
		const model = this.view.model;
		const pivot = model.view().pivot;
		if (pivot) {
			const groupBy = model.group().by;
			const pivotRows = pivot.rows;
			if (pivotRows.length && groupBy.length) {
				const pivotRowLength = pivotRows[0].length;
				const rows = model.view().rows;
				const nodes = this.view.group.nodes;
				const result = [];
				for (let i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
					const node = nodes[i];
					const aggRow = new Array(pivotRowLength);
					for (let j = 0, rowLength = node.rows.length; j < rowLength; j++) {
						const rowIndex = node.rows[j];
						const pivotRow = pivotRows[rowIndex];
						for (let k = 0; k < pivotRowLength; k++) {
							if (pivotRow[k]) {
								const value = aggRow[k];
								aggRow[k] = value ? value + 1 : 1; // apply aggregation
							}
						}
					}
					result.push(aggRow);
				}

				return result;
			}

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