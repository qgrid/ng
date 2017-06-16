import {Model} from "../infrastructure/model";

export declare interface IEntity{
	(entityType: string, columnType: string, body: string ): any;
}

export declare function columnFactory(model: Model): IEntity;
