import Pager from './pagination/pager';
import Sortbar from './sortbar/sortbar';
import Groupbar from './groupbar/groupbar';
import Pivotbar from './pivotbar/pivotbar';
import Visibility from './visibility/visibility';
import ColumnChooser from './column-chooser/column.chooser';
import Progress from './progress/progress';
import * as def from './definition';

export default angular
	.module(def.MODULE_NAME, [])
	.component(def.PAGER_NAME, Pager)
	.component(def.SORTBAR_NAME, Sortbar)
	.component(def.GROUPBAR_NAME, Groupbar)
	.component(def.PIVOTBAR_NAME, Pivotbar)
	.component(def.VISIBILITY_NAME, Visibility)
	.component(def.COLUMNCHOOSER_NAME, ColumnChooser)
	.component(def.PROGRESS_NAME, Progress)
	.config(Setup)
	.name;

Setup.$inject = ['qgridThemeProvider'];
function Setup(qgridThemeProvider) {
	const EMPTY = '';

	qgridThemeProvider.register('default', theme => {
		theme.put('qgrid.plugin.pager.tpl.html', require('./plugins/pagination/pager.html'));
		theme.put('qgrid.plugin.progress.tpl.html', require('./plugins/progress/progress.html'));
		theme.put('qgrid.plugin.sortbar.tpl.html', require('./plugins/sortbar/sortbar.html'));
		theme.put('qgrid.plugin.groupbar.tpl.html', require('./plugins/groupbar/groupbar.html'));
		theme.put('qgrid.plugin.pivotbar.tpl.html', require('./plugins/pivotbar/pivotbar.html'));
		theme.put('qgrid.plugin.visibility.tpl.html', require('./plugins/visibility/visibility.html'));
		theme.put('qgrid.plugin.columnchooser.tpl.html', require('./plugins/column-chooser/column.chooser.html'));
	});
}