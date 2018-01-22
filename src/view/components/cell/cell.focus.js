import Component from '../component';
import { GRID_NAME } from '@grid/view/definition';

class CellFocus extends Component {
    constructor($element) {
        super();

        this.element = $element[0];
    }

    onInit() {
        this.root.model.focusChanged.on(e => {
            if (e.hasChanges('rowIndex') || e.hasChanges('columnIndex')) {
                const table = this.root.table;
                const cell = table.body.cell(e.state.rowIndex, e.state.columnIndex);
                const model = cell.model();
                if (model) {
                    const rect = cell.rect();
                    this.element.style.top = rect.top + 'px';
                    this.element.style.left = rect.left + 'px';
                    this.element.style.width = rect.width + 'px';
                    this.element.style.height = rect.height + 'px';
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