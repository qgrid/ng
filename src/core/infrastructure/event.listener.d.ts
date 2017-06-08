export declare class EventListener {

	constructor(context: object, element: object);

	element: object;
	context: object;
	handlers: object;


	on(name: string, f: Function): void;

	off(): void;
}