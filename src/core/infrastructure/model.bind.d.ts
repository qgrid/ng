export class ModelBinder {
	constructor(source: Object);

	source: Object;
	off: Object;

	bind(model: Object, names: Array, run: Boolean): Object;
}