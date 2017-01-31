import ColumnView from 'core/view/view.column';
import Column from './column';

export default class ColumnText extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new Column('text');
	}
}