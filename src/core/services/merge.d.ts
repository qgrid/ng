interface IMergeResult{
	updated: number;
	removed: number;
	inserted: number;
}

interface ISettings {
	equals: (l: object, r: object) => boolean;
	update: (l: object, r: object /*left, i*/) => void;
	remove: (l: object, left: object, i: object) => void;
	insert: (r: object, left: object) => void;
}

export declare function merge(settings: ISettings): IMergeResult;