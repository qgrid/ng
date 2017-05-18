import {Layer} from './layer';
import {Element} from './element';

export class View extends Element {
	constructor() {
		super();
	}

	addLayer(name) {
		return Layer.empty();
	}

	removeLayer(name) {
	}
}