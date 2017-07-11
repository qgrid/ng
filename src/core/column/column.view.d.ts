import {View} from '../view/view';
import {Model} from '../infrastructure/model';
import {GridService} from '../services/grid';

export declare class ColumnView extends View {
	constructor(model: Model, service: GridService);
	service: GridService;
	updateOn(generation: string): boolean;
}