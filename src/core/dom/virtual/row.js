import {Row} from '../row';
import {Row as RowModel} from '../../row';

export class VirtualRow extends Row {
	constructor(box, index, element = null) {
		super(box, index, element);

		const mapper = box.context.mapper;
		this.dataIndex = mapper.viewToRow(index);
	}

	get model() {
		const index = this.dataIndex;
		if (index >= 0) {
			const gridModel = this.box.model;
			const rows = gridModel.data().rows;
			if (rows.length > index) {
				const model = {index: index, model: rows[index]};
				return new RowModel(model);
			}
		}

		return null;
	}

	addClass(name, force = false) {
		this.box.addRowClass(this, name, force);
	}

	removeClass(name, force = false) {
		this.box.removeRowClass(this, name, force);
	}
}
