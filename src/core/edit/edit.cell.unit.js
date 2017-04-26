import {cloneDeep, noop} from 'core/services/utility';
import {set as setValue, getFactory as valueFactory} from 'core/services/value';
import {set as setLabel, getFactory as labelFactory} from 'core/services/label';
import Fetch from 'core/infrastructure/fetch';

export default class CellEditor {
	constructor(row, column, current) {
		this.setValue = setValue;
		this.getValue = valueFactory(column);
		this.setLabel = setLabel;
		this.getLabel = labelFactory(column);

		this.column = column;
		this.origin = row;
		this.current = current || cloneDeep(row);
		this.fetch = this.fetchFactory();
		this.resetFetch = this.fetch.run(row);
	}

	commit() {
		this.setValue(this.origin, this.column, this.value);
		if (this.label !== null) {
			this.setLabel(this.origin, this.column, this.label);
		}
		this.resetFetch();
		this.resetFetch = noop;
	}

	reset() {
		this.setValue(this.current, this.column, this.getValue(this.origin));
		this.setLabel(this.current, this.column, this.getLabel(this.origin));
		this.resetFetch();
		this.resetFetch = noop;
	}

	get label() {
		return this.getLabel(this.current);
	}

	set label(value) {
		return this.setLabel(this.current, this.column, value);
	}

	get value() {
		return this.getValue(this.current);
	}

	set value(value) {
		this.setValue(this.current, this.column, value);
	}

	options() {
		return this.column.editorOptions;
	}

	fetchFactory() {
		const options = this.options();
		if (options && options.fetch) {
			return new Fetch(options.fetch);
		}
		return new Fetch(() => this.getValue(this.origin));
	}

	static get empty() {
		return EmptyEditor;
	}
}

class NullEditor {
	commit() {
	}

	reset() {
	}

	get label() {
		return null;
	}

	set label(value) {
	}

	get value() {
		return null;
	}

	set value(value) {
	}
}

const EmptyEditor = new NullEditor();