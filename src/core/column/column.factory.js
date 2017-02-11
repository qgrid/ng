import AppError from 'core/infrastructure/error';
import TextColumn from 'core/column-type/text.column';
import NumberColumn from 'core/column-type/number.column';
import BoolColumn from 'core/column-type/bool.column';
import DateColumn from 'core/column-type/date.column';
import PasswordColumn from 'core/column-type/password.column';
import ArrayColumn from 'core/column-type/array.column';
import EmailColumn from 'core/column-type/email.column';
import SelectColumn from 'core/column-type/select.column';
import GroupColumn from 'core/column-type/group.column';
import PivotColumn from 'core/column-type/pivot.column';
import RowNumberColumn from 'core/column-type/row.number.column';
import RowIndicatorColumn from 'core/column-type/row.indicator.column';
import PadColumn from 'core/column-type/pad.column';

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
		case 'password':
			return new PasswordColumn(model || PasswordColumn.model());
		case 'select':
			return new SelectColumn(model || SelectColumn.model());
		case 'group':
			return new GroupColumn(model || GroupColumn.model());
		case 'pivot':
			return new PivotColumn(model || PivotColumn.model());
		case 'row-number':
			return new RowNumberColumn(model || RowNumberColumn.model());
		case 'row-indicator':
			return new RowIndicatorColumn(model || RowIndicatorColumn.model());
		case 'pad':
			return new PadColumn(model || PadColumn.model());
		default:
			throw new AppError(
				'column.factory',
				`Invalid type "${type}"`);
	}
}