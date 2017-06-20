export declare class EventListener {

	constructor(context: object, element: object);

	on(name: string, f: () => void): void;

	off(): void;
}