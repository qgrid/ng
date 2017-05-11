import {
	defaultPipeUnit,
	viewPipeUnit,
	columnPipeUnit
}from './';

export class PipeUnit {
	static get default() {
		return defaultPipeUnit;
	}

	static get view() {
		return viewPipeUnit;
	}

	static get column() {
		return columnPipeUnit;
	}
}