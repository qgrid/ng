import ModelComponent from '../model.component';
import { GRID_NAME, ROW_DETAILS_NAME } from 'ng/definition';
import TemplatePath from 'core/template/template.path';
import {isUndefined} from 'core/services/utility';
TemplatePath
	.register(ROW_DETAILS_NAME, () => {
		return {
			model: 'rowDetails',
			resource: 'content'
		};
	});


class RowDetails extends ModelComponent {
	constructor() {
		super('row');
	}

	onInit() {
		const rowDetails = this.model.rowDetails;
		const isVisible = isUndefined(this.isVisible) ? true : this.isVisible;

		rowDetails({
			isVisible: isVisible
		})
	}
}

RowDetails.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: RowDetails,
	bindings: {
		isVisible: '@'
	}
};