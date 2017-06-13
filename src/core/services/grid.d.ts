import {Model} from "../infrastructure/model";

export class GridService {

	constructor(model: Model, apply: () => object);

	invalidate(source: string, changes: object, pipe: object): any;

	busy(): any;
}