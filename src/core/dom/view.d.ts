import {Unit} from './unit';
import {IContext} from "./box";

export declare interface IFunc{
	(): void;
}

export declare class View extends Unit {
	constructor(public markup: object, public context: IContext);

	layers: Map;

	focus(): boolean;

	blur(): void;

	isFocused(): boolean;

	keyDown(f: IFunc ): void;

	addLayer(name: string): any;

	removeLayer(name: string): boolean;

	scrollLeft(value: number): number;

	scrollTop(value: number): number;

	canScrollTo(element: Element, direction: string): boolean;

	rect(): object;
}