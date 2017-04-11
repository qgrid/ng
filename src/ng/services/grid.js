import Model from 'core/infrastructure/model';
import GridService from 'core/services/grid';
import Pipe from 'core/pipe/pipe';
import PipeUnit from 'core/pipe/units/pipe.unit';
import Log from 'core/infrastructure/log';
import Command from 'core/infrastructure/command';
import {noop} from 'core/services/utility';
import {getFactory} from 'core/services/value';

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

		return new GridService(model, getFactory, apply);
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
}

Grid.$inject = ['$rootScope'];