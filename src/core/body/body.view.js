import {View} from '../view';
import {getFactory as valueFactory} from '../services/value';
import {getFactory as labelFactory, set as setLabel} from '../services/label';
import {Log} from '../infrastructure';
import {Renderer} from '../scene';

export class BodyView extends View {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.rows = [];
		this.render = new Renderer(model);

		this.using(model.sceneChanged.watch(this.invalidate.bind(this)));
	}

	invalidate() {
		Log.info('view.body', 'invalidate');

		const model = this.model;
		const table = this.table;
		const sceneState = model.scene();

		this.rows = sceneState.rows;

		table.view.removeLayer('blank');
		if (!this.rows.length) {
			const layerState = model.layer();
			if (layerState.resource.data.hasOwnProperty('blank')) {
				const layer = table.view.addLayer('blank');
				layer.resource('blank', layerState.resource);
			}
		}
	}

	valueFactory(column, getValueFactory = null) {
		const getValue = (getValueFactory || valueFactory)(column);
		return row => this.render.getValue(row, column, getValue);
	}

	labelFactory(column) {
		return this.valueFactory(column, labelFactory);
	}

	value(row, column, value) {
		if (arguments.length == 3) {
			this.render.setValue(row, column, value);
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