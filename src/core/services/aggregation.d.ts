export declare class Aggregation {

	constructor();

	static first(rows: object[], getValue: (param: string) => any ) any;

	static last(rows: object[], getValue: (param: string) => any) any;

	static max(rows: object[], getValue: (param: string) => any) any;

	static min(rows: object[], getValue: (param: string) => any) any;

	static minMax(rows: object[], getValue: (param: string) => any) any;

	static avg(rows: object[], getValue: (param: string) => any, options: any[]) any;

	static sum(rows: object[], getValue: (param: string) => any, options: any[], container: any) any;

	static join(rows: object[], getValue: (param: string) => any, options: any[]) any;

	static count(rows: object[], getValue: (param: string) => any, options: any[]) any;

}