import ColumnView from 'core/view/view.column';
import DataColumnModel from './column.model.data';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('text-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

class TextColumnModel extends DataColumnModel{
	constructor(){
		super('text');
	}
}


export default class TextColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new TextColumnModel();
	}
}