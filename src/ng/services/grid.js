import Model from 'core/infrastructure/model';
import GridService from 'core/services/grid';
import Pipe from 'core/pipe/pipe';
import {getFactory} from './value';

export default class Grid {
	static model() {
		return new Model();
	}

	static service(model) {
		return new GridService(model, getFactory);
	}

	static get pipe() {
		return Pipe;
	}
}