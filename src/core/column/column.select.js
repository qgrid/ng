import ColumnView from 'core/view/view.column';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('select-cell', (template) => {
	return {
		model: 'selection',
		resource: template.for === 'head' ? 'select-all' : 'select'
	};
});

export default class ColumnSelect extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return {
			key: '$select',
			type: 'select'
		};
	}
}