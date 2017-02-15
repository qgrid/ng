import Pager from './pagination/pager';
import Sortbar from './sortbar/sortbar';
import Groupbar from './groupbar/groupbar';
import Pivotbar from './pivotbar/pivotbar';
import Selectionbar from './selectionbar/selectionbar';
import Visibility from './visibility/visibility';
import ColumnChooser from './column-chooser/column.chooser';
import ColumnFilter from './column-filter/column.filter';
import ColumnFilterPanel from './column-filter/column.filter.panel';
import Progress from './progress/progress';
import Popup from './popup/popup';
import PopupTrigger from './popup/popup.trigger';
import PopupHead from './popup/popup.head';
import PopupBody from './popup/popup.body';
import PopupPanel from './popup/popup.panel';
import PopupService from './popup/popup.service';

import * as def from './definition';

export default angular
	.module(def.MODULE_NAME, [def.MODULE_CORE_NAME])
	.component(def.PAGER_NAME, Pager)
	.component(def.SORTBAR_NAME, Sortbar)
	.component(def.GROUPBAR_NAME, Groupbar)
	.component(def.PIVOTBAR_NAME, Pivotbar)
	.component(def.SELECTIONBAR_NAME, Selectionbar)
	.component(def.VISIBILITY_NAME, Visibility)
	.component(def.COLUMN_CHOOSER_NAME, ColumnChooser)
	.component(def.COLUMN_FILTER_NAME, ColumnFilter)
	.component(def.COLUMN_FILTER_PANEL_NAME, ColumnFilterPanel)
	.component(def.PROGRESS_NAME, Progress)
	.component(def.POPUP_NAME, Popup)
	.component(def.POPUP_TRIGGER_NAME, PopupTrigger)
	.component(def.POPUP_HEAD_NAME, PopupHead)
	.component(def.POPUP_BODY_NAME, PopupBody)
	.component(def.POPUP_PANEL_NAME, PopupPanel)
	.service(def.POPUP_SERVICE, PopupService)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	const EMPTY = '';

	qgridThemeProvider.register('default', theme => {
		theme.put('qgrid.plugin.pager.tpl.html', require('./pagination/pager.html'));
		theme.put('qgrid.plugin.progress.tpl.html', require('./progress/progress.html'));
		theme.put('qgrid.plugin.sortbar.tpl.html', require('./sortbar/sortbar.html'));
		theme.put('qgrid.plugin.groupbar.tpl.html', require('./groupbar/groupbar.html'));
		theme.put('qgrid.plugin.pivotbar.tpl.html', require('./pivotbar/pivotbar.html'));
		theme.put('qgrid.plugin.selectionbar.tpl.html', require('./selectionbar/selectionbar.html'));
		theme.put('qgrid.plugin.visibility.tpl.html', require('./visibility/visibility.html'));
		theme.put('qgrid.plugin.column-chooser.tpl.html', require('./column-chooser/column.chooser.html'));
		theme.put('qgrid.plugin.column-filter.tpl.html', require('./column-filter/column.filter.html'));

		theme.put('qgrid.plugin.popup.tpl.html', require('./popup/popup.html'));
		theme.put('qgrid.plugin.popup-panel.tpl.html', require('./popup/popup.panel.html'));
		theme.put('qgrid.plugin.popup-trigger.tpl.html', EMPTY);
		theme.put('qgrid.plugin.popup-head.tpl.html', EMPTY);
		theme.put('qgrid.plugin.popup-body.tpl.html', EMPTY);
	});
}