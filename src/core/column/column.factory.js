import AppError from 'core/infrastructure/error';
import ColumnText from './column.text';

export default function (type, model) {
	switch (type) {
		case 'text':
			return new ColumnText(model);
		default:
			throw  new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}