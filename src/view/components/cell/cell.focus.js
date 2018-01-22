import Component from '../component';
import { GRID_NAME } from '@grid/view/definition';

class CellFocus extends Component {
    constructor($element) {
        super();

        this.element = $element[0];
    }

    onInit() {
        const model = this.root.model;
        const table = this.root.table;
        const element = this.element;
        model.focusChanged.on(e => {
            element.classList.add('q-grid-active');
            if (e.hasChanges('rowIndex') || e.hasChanges('columnIndex')) {
                const cell = table.body.cell(e.state.rowIndex, e.state.columnIndex);
                cell.addClass('q-grid-animate');
                const target = cell.element;
                const scrollState = model.scroll();
                element.style.top = (target.offsetTop - scrollState.top) + 'px';
                element.style.left = (target.offsetLeft - scrollState.left) + 'px';
                element.style.width = target.clientWidth + 'px';
                element.style.height = target.clientHeight + 'px';
                setTimeout(() => {
                    element.classList.remove('q-grid-active');
                    cell.removeClass('q-grid-animate');
                }, 200);
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