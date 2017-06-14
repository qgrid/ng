export interface IAggregationOptions{
	distinct: boolean;
	separator: string;
}

export declare class Aggregation {

	constructor();

	static first(rows: object[], getValue: (row: string) => any ) any;

	static last(rows: object[], getValue: (row: string) => any) any;

	static max(rows: object[], getValue: (row: string) => any) any;

	static min(rows: object[], getValue: (row: string) => any) any;

	static minMax(rows: object[], getValue: (row: string) => any) any;

	static avg(rows: object[], getValue: (row: string) => any, options: IAggregationOptions[]) any;

	static sum(rows: object[], getValue: (row: string) => any, options: IAggregationOptions[], container: any) any;

	static join(rows: object[], getValue: (row: string) => any, options: IAggregationOptions[]) any;

	static count(rows: object[], getValue: (row: string) => any, options: IAggregationOptions[]) any;

}