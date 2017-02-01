import AppError from 'core/infrastructure/error';
import Column from './column';
import ColumnText from './column.text';
import ColumnSelect from './column.select';
import ColumnGroup from './column.group';

export default function (type, model = null) {
	switch (type) {
		case 'text':
			return new ColumnText(model || new Column());
		case 'select':
			return new ColumnSelect(model || ColumnSelect.model());
		case 'group':
			return new ColumnGroup(model || ColumnGroup.model());
		default:
			throw  new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}