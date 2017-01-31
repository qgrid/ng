import ColumnView from 'core/view/view.column';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('group-cell', (template) => {
	return {
		model: 'node',
		resource: template.for === 'body' ? 'content' : null
	};
});

export default class GroupColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return {
			key: '$group',
			type: 'group',
			title: 'Group'
		};
	}
}