import {pipeInvalidateFactory} from '../pipe/pipe.invalidate.factory';

export default class GridService {
	constructor(model, valueFactory) {
		this.model = model;
		this.valueFactory = valueFactory;
	}

	invalidate(source = 'invalidate', diff = {}) {
		pipeInvalidateFactory(this.model, this.valueFactory)(source, diff);
	}
}