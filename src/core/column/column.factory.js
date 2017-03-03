import CustomColumn from 'core/column-type/column.view';
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

export default function (type, body = null) {
	switch (type) {
		case 'text':
			return new TextColumn(TextColumn.model(body));
		case 'number':
			return new NumberColumn(NumberColumn.model(body));
		case 'bool':
			return new BoolColumn(BoolColumn.model(body));
		case 'date':
			return new DateColumn(DateColumn.model(body));
		case 'array':
			return new ArrayColumn(ArrayColumn.model(body));
		case 'email':
			return new EmailColumn(EmailColumn.model(body));
		case 'password':
			return new PasswordColumn(PasswordColumn.model(body));
		case 'select':
			return new SelectColumn(SelectColumn.model(body));
		case 'group':
			return new GroupColumn(GroupColumn.model(body));
		case 'pivot':
			return new PivotColumn(PivotColumn.model(body));
		case 'row-number':
			return new RowNumberColumn(RowNumberColumn.model(body));
		case 'row-indicator':
			return new RowIndicatorColumn(RowIndicatorColumn.model(body));
		case 'pad':
			return new PadColumn(PadColumn.model(body));
		default:
			return new CustomColumn(CustomColumn.model(body));
	}
}