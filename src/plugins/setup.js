import ColumnChooserModel from './column-chooser/column.chooser.model';
import ColumnFilterModel from './column-filter/column.filter.model';
import PopupModel from './popup/popup.model';

export function setup(model) {
	model.register('columnChooser', ColumnChooserModel)
		.register('columnFilter', ColumnFilterModel)
		.register('popup', PopupModel);
}