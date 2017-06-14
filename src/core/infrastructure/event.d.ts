export interface IReturn{
	(): void;
}

export declare class Event {

	constructor(e: () => void);

	on(f: () => any): IReturn;

	watch(f: () => any): void;

	emit(e: () => void): void;
}