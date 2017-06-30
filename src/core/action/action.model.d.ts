import {Resource} from '../resource/resource';
import {Action} from '../infrastructure/action';

export declare class ActionModel{
	constructor();

    resource: Resource;
	items: Action[];
}