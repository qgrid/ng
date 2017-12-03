import { GRID_PREFIX } from '../definition';
import * as css from '../services/css';

export class TdCtrl {
	static classify(element, column) {
		element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.key}`));
		element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.type}`));
		if (column.editor) {
			element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.editor}`));
		}
	}

	static viewMode(element) {
		element.classList.remove(`${GRID_PREFIX}-edit`);
	}

	static editMode(element) {
		element.classList.add(`${GRID_PREFIX}-edit`);        
	}
}