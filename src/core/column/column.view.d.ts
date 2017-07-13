import {View} from '../view/view';
import {Model} from '../infrastructure/model';
import {GridService} from '../services/grid';
import {GenerationMode} from '../column-list/column.list.model';

export declare class ColumnView extends View {
	constructor(model: Model, service: GridService);
	updateOn(generation: GenerationMode): boolean;
}
