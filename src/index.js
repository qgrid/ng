import {Model} from '@grid/core/infrastructure';
import * as def from './definition';
import {setup as setupCore} from '@grid/core';
import {setup as setupPlugins} from './plugins/setup';
import pluginModule from './plugins';
import {coreModule, layoutModule} from './view';

setupCore(Model);
setupPlugins(Model);

export default angular // eslint-disable-line no-undef
	.module(def.MODULE_NAME, [coreModule, layoutModule, pluginModule, 'vscroll', 'expression-builder'])
	.name;
