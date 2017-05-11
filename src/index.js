import Model from '@grid/core/infrastructure/model';
import GridModel from '@grid/core/grid/grid.model';
import ViewModel from '@grid/core/view/view.model';
import DataModel from '@grid/core/data/data.model';
import HeadModel from '@grid/core/head/head.model';
import BodyModel from '@grid/core/body/body.model';
import LayoutModel from '@grid/core/layout/layout.model';
import NavigationModel from '@grid/core/navigation/navigation.model';
import FocusModel from '@grid/core/focus/focus.model';
import ColumnListModel from '@grid/core/column-list/column.list.model';
import RowModel from '@grid/core/row/row.model';
import SelectionModel from '@grid/core/selection/selection.model';
import FootModel from '@grid/core/foot/foot.model';
import SortModel from './core/sort/sort.model';
import GroupModel from '@grid/core/group/group.model';
import PivotModel from '@grid/core/pivot/pivot.model';
import PluginModel from '@grid/core/plugin/plugin.model';
import EditModel from '@grid/core/edit/edit.model';
import ToolbarModel from '@grid/core/toolbar/toolbar.model';
import LayerModel from '@grid/core/layer/layer.model';
import PaginationModel from '@grid/core/pagination/pagination.model';
import ProgressModel from '@grid/core/progress/progress.model';
import HighlightModel from '@grid/core/highlight/highlight.model';
import VisibilityModel from '@grid/core/visibility/visibility.model';
import FilterModel from '@grid/core/filter/filter.model';
import DragModel from '@grid/core/drag/drag.model';
import StyleModel from '@grid/core/style/style.model';
import ScrollModel from '@grid/core/scroll/scroll.model';

import ColumnChooserModel from '@grid/view/plugins/column-chooser/column.chooser.model';
import ColumnFilterModel from '@grid/view/plugins/column-filter/column.filter.model';
import PopupModel from '@grid/view/plugins/popup/popup.model';

import view from './view';

Model.register('grid', GridModel)
	.register('view', ViewModel)
	.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('head', HeadModel)
	.register('body', BodyModel)
	.register('navigation', NavigationModel)
	.register('focus', FocusModel)
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
	.register('layer', LayerModel)
	.register('pagination', PaginationModel)
	.register('progress', ProgressModel)
	.register('highlight', HighlightModel)
	.register('visibility', VisibilityModel)
	.register('filter', FilterModel)
	.register('drag', DragModel)
	.register('style', StyleModel)
	.register('columnChooser', ColumnChooserModel)
	.register('columnFilter', ColumnFilterModel)
	.register('popup', PopupModel)
	.register('scroll', ScrollModel);

export default view;