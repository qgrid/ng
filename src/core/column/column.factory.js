import AppError from 'core/infrastructure/error';
import ColumnText from './column.text';
import ColumnSelect from './column.select';
import ColumnGroup from './column.group';

export default function (type, model) {
	switch (type) {
		case 'text':
			return new ColumnText(model);
		case 'select':
			return new ColumnSelect(model);
		case 'group':
			return new ColumnGroup(model);
		default:
			throw  new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}