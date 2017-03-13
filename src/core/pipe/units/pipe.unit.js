import defaultUnit from './pipe.default.unit';
import viewUnit from './pipe.view.unit';
import columnUnit from './pipe.column.unit';

export default class PipeUnit {
	static get default(){
		return defaultUnit;
	}

	static get view(){
		return viewUnit;
	}

	static get column() {
		return columnUnit;
	}
}