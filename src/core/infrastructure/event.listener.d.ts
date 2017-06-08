export declare class EventListener {

	constructor(context: Object, element: Object);

	element: Object;
	context: Object;
	handlers: Object;


	on(name: String, f: Object): void;

	off(): void;
}