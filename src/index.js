import Model from 'core/infrastructure/model';
import ViewModel from 'core/view/view.model';
import DataModel from 'core/data/data.model';
import HeadModel from 'core/head/head.model';
import BodyModel from 'core/body/body.model';
import SelectionModel from 'core/selection/selection.model';
import FootModel from 'core/foot/foot.model';
import SortModel from './core/sort/sort.model';
import GroupModel from 'core/group/group.model';
import PivotModel from 'core/pivot/pivot.model';
import ToolbarModel from 'core/toolbar/toolbar.model';
import PaginationModel from 'core/pagination/pagination.model';
import NodeModel from 'core/node/node.model';
import VisibilityModel from 'core/visibility/visibility.model';
import FilterModel from 'core/filter/filter.model';

import ng from './ng';

Model.register('view', ViewModel)
	.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('head', HeadModel)
	.register('body', BodyModel)
	.register('foot', FootModel)
	.register('sort', SortModel)
	.register('group', GroupModel)
	.register('pivot', PivotModel)
	.register('toolbar', ToolbarModel)
	.register('pagination', PaginationModel)
	.register('node', NodeModel)
	.register('visibility', VisibilityModel)
	.register('filter', FilterModel);

export default ng;