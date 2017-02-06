import AppError from 'core/infrastructure/error';
import TextColumn from 'core/column-type/column.text';
import NumberColumn from 'core/column-type/column.number';
import BoolColumn from 'core/column-type/column.bool';
import DateColumn from 'core/column-type/column.date';
import ArrayColumn from 'core/column-type/column.array';
import EmailColumn from 'core/column-type/column.email';
import SelectColumn from 'core/column-type/column.select';
import GroupColumn from 'core/column-type/column.group';
import PivotColumn from 'core/column-type/column.pivot';
import RowNumberColumn from 'core/column-type/column.row.number';

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
		case 'row-number':
			return new RowNumberColumn(model || RowNumberColumn.model());
		default:
			throw new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}