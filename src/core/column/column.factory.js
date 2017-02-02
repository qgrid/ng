import AppError from 'core/infrastructure/error';
import TextColumn from './column.text';
import SelectColumn from './column.select';
import GroupColumn from './column.group';
import PivotColumn from './column.pivot';

export default function (type, model = null) {
	switch (type) {
		case 'text':
			return new TextColumn(model || TextColumn.model());
		case 'select':
			return new SelectColumn(model || SelectColumn.model());
		case 'group':
			return new GroupColumn(model || GroupColumn.model());
		case 'pivot':
			return new PivotColumn(model || PivotColumn.model());
		default:
			throw  new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}