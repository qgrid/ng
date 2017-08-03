import ColumnChooserModel from './column-chooser/column.chooser.model';
import ColumnFilterModel from './column-filter/column.filter.model';
import PopupModel from './popup/popup.model';
import DataManipulationModel from './data-manipulation/data.manipulation.model';

export function setup(model) {
	model.register('columnChooser', ColumnChooserModel)
		.register('columnFilter', ColumnFilterModel)
		.register('popup', PopupModel)
		.register('dataManipulation', DataManipulationModel);
}