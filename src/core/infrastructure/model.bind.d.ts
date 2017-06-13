export class ModelBinder {
	constructor(source: object);

	source: object;
	off: object;

	bind(model: object, names: string[], run: boolean): object;
}