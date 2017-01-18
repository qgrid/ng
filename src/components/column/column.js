'use strict';

import Component from '../component';
import {GRID_NAME, COLUMN_LIST_NAME} from '../../definition';
import {clone, assignWith, isUndefined} from '../../core/services/utility';
import ColumnModel from '../../core/column/column.model';

class Column extends Component {
	constructor($attrs) {
		super();

		this.$attrs = $attrs;
	}

	copy(source, target){
		source.key = target.key;
		source.title = target.title;
		source.isDefault = target.isDefault;
		source.isVisible = target.isVisible;
		source.value = this.$attrs.hasOwnProperty('value') ? this.value : null;
	}

	onInit() {
		const data = this.root.model.data;
		const state = data();
		const columns = clone(state.columns);
		const key = this.key || '$default';
		let column = columns.filter(c => c.key === key)[0];
		if (!column) {
			column = new ColumnModel();
			columns.push(column);
		}

		this.copy(column, this);
		data({columns: columns});
	}
}

Column.$inject = ['$attrs'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		columns: `^^${COLUMN_LIST_NAME}`
	},
	controller: Column,
	bindings: {
		key: '@',
		title: '@',
		value: '&',
		isDefault: '@',
		isVisible: '@'
	}
};