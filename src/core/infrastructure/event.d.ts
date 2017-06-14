interface IReturn{
	(): void;
}

export declare class Event {

	constructor(e: () => null);

	on(f: () => any): IReturn;

	watch(f: () => any): void;

	emit(e: () => void): void;
}