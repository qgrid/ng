import {IEditorOptions} from "./email.column";
export declare class ColumnModel {

	constructor(type: string);

	type: string;
	key: string;
	title: string;
	value: string;
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
	index: boolean;
   label: string;

	toString(): string;
}