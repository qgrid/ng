export class ModelBinder {

	constructor(source: object);

	off: object;

	bind(model: object, names: string[], run: boolean): () => any;
}