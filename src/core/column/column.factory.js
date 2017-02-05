import AppError from 'core/infrastructure/error';
import TextColumn from './column.text';
import NumberColumn from './column.number';
import BoolColumn from './column.bool';
import DateColumn from './column.date';
import ArrayColumn from './column.array';
import EmailColumn from './column.email';
import SelectColumn from './column.select';
import GroupColumn from './column.group';
import PivotColumn from './column.pivot';

export default function (type, model = null) {
	switch (type) {
		case 'text':
			return new TextColumn(model || TextColumn.model());
		case 'number':
			return new NumberColumn(model || NumberColumn.model());
		case 'bool':
			return new BoolColumn(model || BoolColumn.model());
		case 'date':
			return new DateColumn(model || DateColumn.model());
		case 'array':
			return new ArrayColumn(model || ArrayColumn.model());
		case 'email':
			return new EmailColumn(model || EmailColumn.model());
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