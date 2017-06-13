import {Row} from '../row/row';

export declare class Aggregation {

	constructor();

	static first(rows: Row[], getValue: () => any ) any;

	static last(rows: Row[], getValue: () => any) any;

	static max(rows: Row[], getValue: () => any) any;

	static min(rows: Row[], getValue: () => any) any;

	static minMax(rows: Row[], getValue: () => any) any;

	static avg(rows: Row[], getValue: () => any, options: any[]) any;

	static sum(rows: Row[], getValue: () => any, options: any[], container: any) any;

	static join(rows: Row[], getValue: () => any, options: any[]) any;

	static count(rows: Row[], getValue: () => any, options: any[]) any;

}