import AppError from 'core/infrastructure/error';
import ColumnText from './column.text';
import ColumnSelect from './column.select';

export default function (type, model) {
	switch (type) {
		case 'text':
			return new ColumnText(model);
		case 'select':
			return new ColumnSelect(model);
		default:
			throw  new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}