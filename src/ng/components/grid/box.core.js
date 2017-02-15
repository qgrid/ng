import Component from '../component';
import {GRID_NAME} from 'ng/definition';
import {GRID_PREFIX} from 'core/definition';

class BoxCore extends Component {
	constructor($element, theme) {
		super();

		this.element = $element[0];
		this.theme = theme;
	}

	onInit() {
		this.initTheme();

		const model = this.model;
		model.dragChanged.watch(e => {
			if (e.changes.hasOwnProperty('isActive')) {
				if (e.state.isActive) {
					this.element.classList.add(`${GRID_PREFIX}-drag`);
				}
				else {
					this.element.classList.remove(`${GRID_PREFIX}-drag`);
				}
			}
		});
	}

	initTheme() {
		const element = this.element;

		element.classList.add(GRID_PREFIX);
		element.classList.add(`${GRID_PREFIX}-theme-${this.theme.name}`);
		this.theme.changed.watch(e => {
			element.classList.remove(`${GRID_PREFIX}-theme-${e.oldValue}`);
			element.classList.add(`${GRID_PREFIX}-theme-${e.newValue}`);
		});
	}

	get model() {
		return this._model || this.root.model;
	}
}

BoxCore.$inject = ['$element', 'qgridTheme'];

export default {
	controller: BoxCore,
	controllerAs: '$box',
	require: {
		'root': `^^?${GRID_NAME}`
	},
	bindings: {
		'_model': `<model`
	}
}