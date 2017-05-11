import Model from '@grid/core/infrastructure/model';
import GridService from '@grid/core/services/grid';
import Pipe from '@grid/core/pipe/pipe';
import PipeUnit from '@grid/core/pipe/units/pipe.unit';
import Log from '@grid/core/infrastructure/log';
import Command from '@grid/core/infrastructure/command';
import {noop} from '@grid/core/services/utility';
import {getFactory as valueFactory} from '@grid/core/services/value';
import {getFactory as labelFactory} from '@grid/core/services/label';

export default class Grid {
	constructor($rootScope) {
		this.$rootScope = $rootScope;
	}

	model() {
		return new Model();
	}

	service(model) {
		const $rootScope = this.$rootScope;
		const apply = () => {
			Log.info('service', '$digest apply');
			$rootScope.$evalAsync(noop);
		};

		return new GridService(model, apply);
	}

	get pipe() {
		return Pipe;
	}

	get pipeUnit() {
		return PipeUnit;
	}

	get Command() {
		return Command;
	}

	get valueFactory() {
		return valueFactory;
	}

	get labelFactory() {
		return labelFactory;
	}
}

Grid.$inject = ['$rootScope'];