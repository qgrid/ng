import {Resource} from '../resource/resource';
import {Cache} from '../infrastructure/cache';

declare class BodyModel{
	constructor();

	resource: Resource;
	cache: Cache;

}