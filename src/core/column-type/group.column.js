import ColumnView from 'core/column/column.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('group-cell', (template) => {
	return {
		model: 'node',
		resource: template.for === 'body' ? 'content' : null
	};
});

class GroupColumnModel extends ColumnModel {
	constructor() {
		super('group');

		this.key = '$group';
		this.title = 'Group';
		this.canEdit = false;
		this.canSort = false;
	}
}

export default class GroupColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return new GroupColumnModel();
	}
}