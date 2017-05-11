import Model from './core/infrastructure/model';
import * as def from './definition';
import {setup as setupCore} from './core/setup';
import {setup as setupPlugins} from './plugins/setup';
import pluginModule from './plugins';
import {coreModule, layoutModule} from './view';

setupCore(Model);
setupPlugins(Model);

export default angular
	.module(def.MODULE_NAME, [coreModule, layoutModule, pluginModule, 'vscroll'])
	.name;
