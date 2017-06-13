export class ModelBinder {

	constructor(source: object);

	off: () => void;

	bind(model: object, names: string[], run: boolean): () => any;
}