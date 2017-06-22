import {Model} from "../infrastructure/model";

export declare interface ILabel{
	(): any;
}

export declare  interface IValue{
	(): any;
}

export declare interface IEditorOptions {
	trigger: string;
	modelFactory: () => Model;
	label: () => any;
	fetch: any;
}

export declare class ColumnModel {

	constructor(type: string);

	type: string;
	key: string;
	title: string;
	value: IValue;
	path: string;
	pin: string;
	origin: string;
	source: string;
	class: string;
	editor: string;
	editorOptions: IEditorOptions;
   width: number;
	minWidth: number;
	maxWidth: number;
   canEdit: boolean;
	canResize: boolean;
	canSort: boolean;
	canMove: boolean;
	canFilter: boolean;
	canHighlight: boolean;
	canFocus: boolean;
   isVisible: boolean;
	index: number;
   label: ILabel;

	toString(): string;
}