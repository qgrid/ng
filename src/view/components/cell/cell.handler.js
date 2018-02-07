import Component from '../component';
import { GRID_NAME } from '@grid/view/definition';
import { jobLine } from '@grid/core/services/job.line';

class CellHandler extends Component {
	constructor($element) {
		super();

		this.element = $element[0];
		this.job = jobLine(150);
	}

	onInit() {
		const model = this.root.model;
		const table = this.root.table;
		const element = this.element;

		// When navigate first or when animation wasn't applied we need to omit
		// next navigation event to make handler to correct position.
		let isValid = false;
		model.navigationChanged.watch(e => {
			if (e.hasChanges('cell')) {
				const domCell = table.body.cell(e.state.rowIndex, e.state.columnIndex);
				const cell = e.state.cell;
				if (cell) {
					const oldColumn = e.changes.cell.oldValue ? e.changes.cell.oldValue.column : {};
					const newColumn = e.changes.cell.newValue ? e.changes.cell.newValue.column : {};

					// Do not apply animation for columns that have viewWidth assigned
					// because it can be animated too.
					const shouldAnimate = oldColumn.key === newColumn.key || !(oldColumn.viewWidth || newColumn.viewWidth);
					if (!shouldAnimate) {
						isValid = false;
						return;
					}

					if (isValid) {
						element.classList.add('q-grid-active');
						domCell.addClass('q-grid-animate');
					}

					const target = domCell.element;
					const scrollState = model.scroll();

					element.style.top = (target.offsetTop - scrollState.top) + 'px';
					element.style.left = (target.offsetLeft - (cell.column.pin ? 0 : scrollState.left)) + 'px';
					element.style.width = target.offsetWidth + 'px';
					element.style.height = target.offsetHeight + 'px';

					if (isValid) {
						this.job(() => {
							element.classList.remove('q-grid-active');
							domCell.removeClass('q-grid-animate');
						}).catch(() => {
							domCell.removeClass('q-grid-animate');
						});
					}

					isValid = true;
				}
			}
		});
	}
}

CellHandler.$inject = ['$element'];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: CellHandler,
	templateUrl: 'qgrid.cell-handler.tpl.html'
};