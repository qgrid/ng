import {View} from '../view';
import * as columnService from '../column/column.service';
import {getFactory as valueFactory} from '../services/value';
import {getFactory as labelFactory, set as setLabel} from '../services/label';
import * as NodeService from '../node/node.service';
import {Log} from '../infrastructure';
import {ResolutionRow} from './resolution.row';

export class BodyView extends View {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.rows = [];
		this.state = {
			columns: []
		};

		this.layout = new ResolutionRow(model, this.state);
		this.using(model.viewChanged.watch(() => this.invalidate(model)));
	}

	invalidate(model) {
		Log.info('view.body', 'invalidate');

		this.invalidateRows(model);
		this.invalidateColumns(model);
	}

	invalidateRows(model) {
		this.state.hasDataRow = false;
		const viewState = model.view();
		this.table.view.removeLayer('blank');
		this.rows = viewState.rows;
		if (!this.rows.length) {
			const layerState = model.layer();
			if (layerState.resource.data.hasOwnProperty('blank')) {
				const layer = this.table.view.addLayer('blank');
				layer.resource('blank', layerState.resource);
			}
		}
	}

	invalidateColumns(model) {
		const columns = model.view().columns;
		this.state.columns = columnService.lineView(columns);
	}

	colspan(row, column, pin) {
		return this.layout.colspan(row, column, pin);
	}

	rowspan(row, pin) {
		return this.layout.rowspan(row, pin);
	}

	columns(row, pin) {
		return this.layout.columns(row, pin);
	}

	valueFactory(column, getValueFactory = null) {
		const getValue = (getValueFactory || valueFactory)(column);
		return row => this.layout.getValue(row, column, getValue);
	}

	labelFactory(column) {
		return this.valueFactory(column, labelFactory);
	}

	value(row, column, value) {
		if (arguments.length == 3) {
			this.layout.setValue(row, column, value);
			return;
		}

		const getValue = this.valueFactory(column);
		return getValue(row);
	}

	label(row, column, value) {
		if (arguments.length === 3) {
			setLabel(row, column, value);
			return;
		}

		const getLabel = this.labelFactory(column);
		return getLabel(row);
	}
}
