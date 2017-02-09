import Model from 'core/infrastructure/model';
import GridService from 'core/services/grid';
import Pipe from 'core/pipe/pipe';
import Log from 'core/infrastructure/log';
import {getFactory} from './value';

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
			$rootScope.$evalAsync(angular.noop);
		};

		return new GridService(model, getFactory, apply);
	}

	get pipe() {
		return Pipe;
	}
}

Grid.$inject = ['$rootScope'];