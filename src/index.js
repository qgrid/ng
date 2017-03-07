import Model from 'core/infrastructure/model';
import GridModel from 'core/grid/grid.model';
import ViewModel from 'core/view/view.model';
import DataModel from 'core/data/data.model';
import HeadModel from 'core/head/head.model';
import BodyModel from 'core/body/body.model';
import LayoutModel from 'core/layout/layout.model';
import NavigationModel from 'core/navigation/navigation.model';
import ColumnListModel from 'core/column-list/column.list.model';
import RowModel from 'core/row/row.model';
import SelectionModel from 'core/selection/selection.model';
import FootModel from 'core/foot/foot.model';
import SortModel from './core/sort/sort.model';
import GroupModel from 'core/group/group.model';
import PivotModel from 'core/pivot/pivot.model';
import PluginModel from 'core/plugin/plugin.model';
import EditModel from 'core/edit/edit.model';
import ToolbarModel from 'core/toolbar/toolbar.model';
import PaginationModel from 'core/pagination/pagination.model';
import ProgressModel from 'core/progress/progress.model';
import VisibilityModel from 'core/visibility/visibility.model';
import FilterModel from 'core/filter/filter.model';
import DragModel from 'core/drag/drag.model';

import PopupModel from 'ng/plugins/popup/popup.model';
import ColumnChooserModel from 'ng/plugins/column-chooser/column.chooser.model';

import ng from './ng';

Model.register('grid', GridModel)
	.register('view', ViewModel)
	.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('head', HeadModel)
	.register('body', BodyModel)
	.register('navigation', NavigationModel)
	.register('foot', FootModel)
	.register('layout', LayoutModel)
	.register('row', RowModel)
	.register('columnList', ColumnListModel)
	.register('sort', SortModel)
	.register('group', GroupModel)
	.register('pivot', PivotModel)
	.register('edit', EditModel)
	.register('plugin', PluginModel)
	.register('toolbar', ToolbarModel)
	.register('pagination', PaginationModel)
	.register('progress', ProgressModel)
	.register('visibility', VisibilityModel)
	.register('columnChooser', ColumnChooserModel)
	.register('filter', FilterModel)
	.register('drag', DragModel)
	.register('popup', PopupModel);

export default ng;