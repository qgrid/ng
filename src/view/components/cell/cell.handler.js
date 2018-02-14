import Component from '../component';
import { GRID_NAME } from '@grid/view/definition';
import { jobLine } from '@grid/core/services/job.line';
import fastdom from 'fastdom';

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

					const domCell = table.body.cell(e.state.rowIndex, e.state.columnIndex);
					if (isValid) {
						domCell.addClass('q-grid-animate');
						element.classList.add('q-grid-active');

						this.job(() => {
							element.classList.remove('q-grid-active');
							domCell.removeClass('q-grid-animate');
						});
					}

					fastdom.measure(() => {
						const target = domCell.element;
						const scrollState = model.scroll();
						const top = (target.offsetTop - scrollState.top) + 'px';
						const left = (target.offsetLeft - (cell.column.pin ? 0 : scrollState.left)) + 'px';
						const width = target.offsetWidth + 'px';
						const height = target.offsetHeight + 'px';

						fastdom.mutate(() => {
							element.style.top = top;
							element.style.left = left;
							element.style.width = width;
							element.style.height = height;
						});
					});

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