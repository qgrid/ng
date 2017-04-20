import {cloneDeep} from 'core/services/utility';
import CellEditor from './edit.value';

export default class RowEditor {
	constructor(row, columns) {
		this.current = cloneDeep(row);

		this.editors =
			columns
				.filter(c => c.canEdit)
				.map(c => {
					return {
						column: c,
						editor: new CellEditor(row, c, this.current)
					};
				});
	}

	commit() {
		this.editors.forEach(e => e.editor.commit());
	}

	reset() {
		this.editors.forEach(e => e.editor.reset());
	}

	static get empty() {
		return EmptyEditor;
	}
}

class NullEditor {
	constructor() {
		this.editors = {};
	}

	commit() {
	}

	reset() {
	}
}

const EmptyEditor = new NullEditor();