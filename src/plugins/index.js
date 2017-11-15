import Pager from './pagination/pager';
import SortBar from './sort-bar/sort.bar';
import GroupBar from './group-bar/group.bar';
import PivotBar from './pivot-bar/pivot.bar';
import SelectionBar from './selection-bar/selection.bar';
import Visibility from './visibility/visibility';
import ColumnChooser from './column-chooser/column.chooser';
import ColumnFilter from './column-filter/column.filter';
import ColumnFilterPanel from './column-filter/column.filter.panel';
import EditForm from './edit-form/edit.form';
import EditFormPanel from './edit-form/edit.form.panel';
import EditFormEditor from './edit-form/edit.form.editor';
import Progress from './progress/progress';
import Popup from './popup/popup';
import PopupTrigger from './popup/popup.trigger';
import PopupHead from './popup/popup.head';
import PopupBody from './popup/popup.body';
import PopupPanel from './popup/popup.panel';
import PopupService from './popup/popup.service';
import Export from './export/export';
import Import from './import/import';
import ActionBarCore from './action-bar/action.bar.core';
import ActionBar from './action-bar/action.bar';
import Action from './action/action';
import ActionCore from './action/action.core';
import DataManipulation from './data-manipulation/data.manipulation';
import Menu from './menu/menu';
import Persistence from './persistence/persistence';
import Title from './title/title';
import CellEditor from './cell-editor/cell.editor';
import Backdrop from './backdrop/backdrop';
import TabTrap from './tab-trap/tab.trap';
import TabTrapIn from './tab-trap/tab.trap.in';
import Legend from './legend/legend';
import LegendCore from './legend/legend.core';
import Validation from './validation/validation';
import Rule from './validation/rule';
import Validator from './validation/validator';

import * as def from './definition';

export default angular  // eslint-disable-line no-undef
	.module(def.MODULE_NAME, [def.MODULE_CORE_NAME])
	.directive(def.MENU_NAME, () => Menu)
	.directive(def.TAB_TRAP_IN_NAME, () => TabTrapIn)
	.component(def.PAGER_NAME, Pager)
	.component(def.SORT_BAR_NAME, SortBar)
	.component(def.GROUP_BAR_NAME, GroupBar)
	.component(def.PIVOT_BAR_NAME, PivotBar)
	.component(def.SELECTION_BAR_NAME, SelectionBar)
	.component(def.VISIBILITY_NAME, Visibility)
	.component(def.COLUMN_CHOOSER_NAME, ColumnChooser)
	.component(def.COLUMN_FILTER_NAME, ColumnFilter)
	.component(def.COLUMN_FILTER_PANEL_NAME, ColumnFilterPanel)
	.component(def.EDIT_FORM_NAME, EditForm)
	.component(def.EDIT_FORM_PANEL_NAME, EditFormPanel)
	.component(def.EDIT_FORM_EDITOR, EditFormEditor)
	.component(def.PROGRESS_NAME, Progress)
	.component(def.POPUP_NAME, Popup)
	.component(def.POPUP_TRIGGER_NAME, PopupTrigger)
	.component(def.POPUP_HEAD_NAME, PopupHead)
	.component(def.POPUP_BODY_NAME, PopupBody)
	.component(def.POPUP_PANEL_NAME, PopupPanel)
	.component(def.EXPORT_NAME, Export)
	.component(def.IMPORT_NAME, Import)
	.component(def.ACTION_BAR_CORE_NAME, ActionBarCore)
	.component(def.ACTION_BAR_NAME, ActionBar)
	.component(def.ACTION_NAME, Action)
	.component(def.ACTION_CORE_NAME, ActionCore)
	.component(def.DATA_MANIPULATION_NAME, DataManipulation)
	.component(def.PERSISTENCE_NAME, Persistence)
	.component(def.TITLE_NAME, Title)
	.component(def.CELL_EDITOR_NAME, CellEditor)
	.component(def.BACKDROP_NAME, Backdrop)
	.component(def.TAB_TRAP_NAME, TabTrap)
	.component(def.LEGEND_NAME, Legend)
	.component(def.LEGEND_CORE_NAME, LegendCore)
	.component(def.VALIDATION_NAME, Validation)
	.component(def.RULE_NAME, Rule)
	.component(def.VALIDATOR_NAME, Validator)
	.service(def.POPUP_SERVICE, PopupService)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	qgridThemeProvider.register('default', theme => {
		theme.put('qgrid.plugin.popup.tpl.html', require('./popup/popup.html'));
	});
}
