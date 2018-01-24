import Component from '../component';
import { GRID_NAME } from '@grid/view/definition';
import { jobLine } from '@grid/core/services/job.line';

class CellFocus extends Component {
	constructor($element) {
		super();

		this.element = $element[0];
		this.job = jobLine(150);
	}

	onInit() {
		const model = this.root.model;
		const table = this.root.table;
		const element = this.element;
		model.focusChanged.on(e => {
			if (e.hasChanges('rowIndex') || e.hasChanges('columnIndex')) {
				const cell = table.body.cell(e.state.rowIndex, e.state.columnIndex);
				const cellModel = cell.model();
				if (cellModel) {
					element.classList.add('q-grid-active');
					cell.addClass('q-grid-animate');
					const target = cell.element;
					const scrollState = model.scroll();

					element.style.top = (target.offsetTop - scrollState.top) + 'px';
					element.style.left = (target.offsetLeft - (cellModel.column.pin ? 0 : scrollState.left)) + 'px';
					element.style.width = target.offsetWidth + 'px';
					element.style.height = target.offsetHeight + 'px';
					this.job(() => {
						element.classList.remove('q-grid-active');
						cell.removeClass('q-grid-animate');
					}).catch(() => {
						cell.removeClass('q-grid-animate');
					});
				}
			}
		});
	}
}

CellFocus.$inject = ['$element'];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: CellFocus
};