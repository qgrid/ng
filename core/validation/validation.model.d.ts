import {Resource} from '../resource/resource';

export declare class ValidationModel {
	constructor();

	resource: Resource;
	regularRules: object[];
	customRules: object[];
}
