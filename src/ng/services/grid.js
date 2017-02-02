import Model from 'core/infrastructure/model';
import GridService from 'core/services/grid';
import Pipe from 'core/pipe/pipe';

export default class Grid {
	static model() {
		return new Model();
	}

	static service(model) {
		return new GridService(model);
	}

	static get pipe() {
		return Pipe;
	}
}