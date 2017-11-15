export declare class PersistenceService {
	save(settings?: obejct): object;
	load(model: object, settings?: object): void;
	active(model: object, settings?: object): boolean;
	stringify(model: object, settings?: object): string;
}
