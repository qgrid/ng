import {defaultPipeUnit} from './default.pipe.unit';
import {viewPipeUnit} from './view.pipe.unit';
import {columnPipeUnit} from './column.pipe.unit';
import {rowPipeUnit} from './row.pipe.unit';
import {rowDetailsPipeUnit} from './row.details.pipe.unit';
import {groupPipeUnit} from './group.pipe.unit';

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

	static get row(){
		return rowPipeUnit;
	}

	static get rowDetails(){
		return rowDetailsPipeUnit;
	}

	static get group(){
		return groupPipeUnit;
	}
}