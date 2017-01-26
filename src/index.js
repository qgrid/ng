import Model from './core/infrastructure/model';
import ViewModel from './core/view/view.model';
import DataModel from './core/grid/data.model';
import HeadModel from './core/head/head.model';
import BodyModel from './core/body/body.model';
import SelectionModel from './core/grid/selection.model';
import FootModel from './core/foot/foot.model';
import GroupModel from './core/group/group.model';
import ToolbarModel from './core/toolbar/toolbar.model';
import ng from './ng';

Model.register('view', ViewModel)
	.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('head', HeadModel)
	.register('body', BodyModel)
	.register('foot', FootModel)
	.register('group', GroupModel)
	.register('toolbar', ToolbarModel);

export default ng;