import Model from '../../core/infrastructure/model';
import GridService from '../../core/services/grid';

export default class Grid {
	constructor() {
	}

	model() {
		return new Model();
	}

	service(model) {
		return new GridService(model);
	}

	get pipe() {

	}
}