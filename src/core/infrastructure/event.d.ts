export declare class Event {

	constructor(e: Object) ;

	handlers: Array<any>
	isDirty: Boolean;
	e: Object;


	on(f: Object): void;

	watch(f: Object): void

	emit(e: Object): void;
}