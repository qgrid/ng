interface IBindResult{
	(): any;
}

interface IOffResult{
	(): void;
}

export class ModelBinder {

	constructor(source: object);

	off: IOffResult;

	bind(model: object, names: string[], run: boolean): IBindResult;
}