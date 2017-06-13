export declare class Event {

	constructor(e: () => null) ;

	on(f: () => any): () => void;

	watch(f: () => any): void

	emit(e: () => void): void;
}