interface IMergeResult{
	updated: any;
	removed: any;
	inserted: any;
}

export declare function merge(settings: object): IMergeResult;