import ColumnModel from './column.model';
import View from 'core/view/view';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('custom-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('custom-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

export default class ColumnView extends View {
	constructor(model) {
		super(model);

		this.key = null;
		this.colspan = 0;
		this.rowspan = 0;
	}

	static model(model) {
		if(model){
			ColumnView.assign(model)
		}
		else{
			model = new ColumnModel();
		}

		model.origin = 'custom';
		return model;
	}

	static assign(body) {
		const etalon = this.model();
		for (let key of Object.keys(etalon)) {
			if (!body.hasOwnProperty(key)) {
				body[key] = etalon[key];
			}
		}
		return body;
	}
}