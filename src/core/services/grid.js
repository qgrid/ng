import {pipeInvalidateFactory} from '../pipe/pipe.invalidate.factory';

export default class GridService {
	constructor(model) {
		this.model = model;
	}

	invalidate() {
		pipeInvalidateFactory(this.model)('invalidate');
	}
}