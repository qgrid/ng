import Model from './core/infrastructure/model';
import DataModel from './core/grid/data.model';
import HeadModel from './core/head/head.model';
import BodyModel from './core/body/body.model';
import SelectionModel from './core/grid/selection.model';
import FootModel from './core/foot/foot.model';
import ng from './ng';

Model.register('data', DataModel)
	.register('selection', SelectionModel)
	.register('head', HeadModel)
	.register('body', BodyModel)
	.register('foot', FootModel);

export default ng;