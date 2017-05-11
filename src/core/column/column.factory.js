import * as guard from '@grid/core/infrastructure/guard';
import {assignWith, clone, isUndefined} from '@grid/core/services/utility';
import CustomColumn from '@grid/core/column-type/column.model.view';
import TextColumn from '@grid/core/column-type/text.column';
import NumberColumn from '@grid/core/column-type/number.column';
import BoolColumn from '@grid/core/column-type/bool.column';
import DateColumn from '@grid/core/column-type/date.column';
import PasswordColumn from '@grid/core/column-type/password.column';
import ArrayColumn from '@grid/core/column-type/array.column';
import EmailColumn from '@grid/core/column-type/email.column';
import SelectColumn from '@grid/core/column-type/select.column';
import GroupColumn from '@grid/core/column-type/group.column';
import PivotColumn from '@grid/core/column-type/pivot.column';
import RowNumberColumn from '@grid/core/column-type/row.number.column';
import RowIndicatorColumn from '@grid/core/column-type/row.indicator.column';
import PadColumn from '@grid/core/column-type/pad.column';
import TimeColumn from '@grid/core/column-type/time.column';
import UrlColumn from '@grid/core/column-type/url.column';
import FileColumn from '@grid/core/column-type/file.column';
import ImageColumn from '@grid/core/column-type/image.column';
import ReferenceColumn from '@grid/core/column-type/reference.column';
import IdColumn from '@grid/core/column-type/id.column';

function merge(target, source) {
	if (target && source) {
		return assignWith(target, source, (s, t) => isUndefined(s) ? t : s);
	}

	return target || clone(source);
}

export default function (model) {
	const columnList = model.columnList;
	const columnMap = {
		'text': TextColumn,
		'number': NumberColumn,
		'bool': BoolColumn,
		'date': DateColumn,
		'array': ArrayColumn,
		'email': EmailColumn,
		'password': PasswordColumn,
		'select': SelectColumn,
		'group': GroupColumn,
		'pivot': PivotColumn,
		'row-number': RowNumberColumn,
		'row-indicator': RowIndicatorColumn,
		'pad': PadColumn,
		'time': TimeColumn,
		'url': UrlColumn,
		'file': FileColumn,
		'image': ImageColumn,
		'reference': ReferenceColumn,
		'id': IdColumn,
		'custom': CustomColumn
	};

	const create = (entityType, columnType, body) => {
		const Type = columnMap[entityType];
		const settings = columnList().reference[columnType];
		body = merge(body, settings);

		const model = Type.model(body);
		return new Type(model);
	};

	return (type, body = null) => {
		guard.notNullOrEmpty(type, 'type');

		if (columnMap.hasOwnProperty(type)) {
			return create(type, type, body);
		}

		return create('custom', type, body);
	};
}