import ColumnView from 'core/view/view.column';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('group-cell', (template) => {
	return {
		model: 'group',
		resource: template.for === 'head' ? 'group-all' : 'group'
	};
});

export default class GroupColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return {
			key: '$group',
			type: 'group'
		};
	}
}