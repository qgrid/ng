export declare class EventListener {

	constructor(context: object, element: object);

	private element: object;
	private context: object;
	private handlers: object;


	on(name: string, f: Function): void;

	off(): void;
}