import Layer from './layer';
import Row from './row';
import Column from './column';
import Cell from './cell';

class BoxCore {
	constructor() {
	}

	column() {
		return {
			cells: () => {
				return [];
			}
		};
	}

	row() {
		return {
			cells: () => {
				return [];
			}
		};
	}

	rows() {
		return [];
	}

	cell() {
		return null;
	}

	addLayer() {
		return Layer.empty;
	}

	removeLayer() {
	}
}

export default class Box extends BoxCore {
	constructor(document, element, template) {
		super();

		this.document = document;
		this.element = element;
		this.template = template;
		this.layers = new Map();
	}

	static get empty() {
		return new BoxCore();
	}

	column(index) {
		if (index >= 0) {
			const rows = this.element.rows;
			if (rows.length) {
				const cellsCount = rows[0].cells.length;
				if (index < cellsCount) {
					return new Column(this.element, index)
				}
			}
		}
		return null;
	}

	row(index) {
		if (index >= 0) {
			const rows = this.element.rows;
			if (index < rows.length) {
				return new Row(rows[index]);
			}
		}
		return null;
	}

	rows() {
		return this.element.rows.map(element => new Row(element));
	}

	rowCount() {
		return this.element.rows.length;
	}

	columnCount() {
		if (this.rowCount() > 0) {
			const row = this.element.rows[0];
			return row.cells.length;
		}
		
		return 0;
	}

	cell(row, column) {
		if (row >= 0 && column >= 0) {
			const rows = this.element.rows;
			if (rows.length) {
				const cellsCount = rows[0].cells.length;
				if (row < rows.length && column < cellsCount) {
					const cell = rows[row].cells[column];
					return new Cell(cell);
				}
			}
		}
		return null;
	}

	addLayer(name) {
		const layers = this.layers;
		if (layers.has(name)) {
			return layers.get(name);
		}

		const node = this.document.createElement(`div`);
		node.classList.add(name);
		this.element.appendChild(node);

		const layer = new Layer(node, this.template);
		layers.set(name, layer);
		return layer;
	}

	removeLayer(name) {
		const layers = this.layers;
		if (layers.has(name)) {
			const layer = layers.get(name);
			layer.destroy();
			layer.element.parentElement.removeChild(layer.element);
			layers.delete(name);
		}
	}
}