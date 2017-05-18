import {identity} from '../services/utility';
import * as columnService from '../column/column.service';

export function indexMapperFactory(model) {
	const view = model.view;
	return {
		row: identity,
		column: index => {
			const columns = view().columns;
			const line = columnService.lineView(columns);
			const column = line[index];
			return column ? column.model.key : null;
		}
	};
}