import {noop} from '../utility';


export class ModelBinder {
	constructor();

	source: String;
	off: noop;


	bind(model: Object, names: Array, run: Boolean): any;
}