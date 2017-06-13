export declare class Event {

	constructor(e: () => null) ;

	on(f: () => any): any;

	watch(f: () => any): void

	emit(e: () => void): void;
}