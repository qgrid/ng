import {AppError} from '../infrastructure/index';
import {lineView} from '../column/column.service';

export class Scene {
	constructor(model) {
		this.model = model;
	}

	rows(items) {
		return items;
	}

	columns(items) {
		return items;
	}

	area(items) {
		const line = lineView(items);
		const result = {
			left: [],
			right: [],
			null: []
		};

		for (let i = 0, length = line.length; i < length; i++) {
			const column = line[i];
			const pin = column.model.pin;
			let area = result[pin];
			if (!area) {
				throw new AppError('scene', `Unsupported pin ${pin}`);
			}

			area.push(column);
		}

		return result;
	}
}