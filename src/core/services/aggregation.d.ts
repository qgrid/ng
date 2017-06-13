import {Row} from '../row/row';

export declare class Aggregation {

	constructor();

	static first(rows: Row[], getValue: (object) => any ) any;

	static last(rows: any[], getValue: () => any) any;

	static max(rows: any[], getValue: () => any) any;

	static min(rows: any[], getValue: () => any) any;

	static minMax(rows: any[], getValue: () => any) any;

	static avg(rows: any[], getValue: () => any, options: any[]) any;

	static sum(rows: any[], getValue: () => any, options: any[], container: any) any;

	static join(rows: any[], getValue: () => any, options: any[]) any;

	static count(rows: any[], getValue: () => any, options: any[]) any;

}