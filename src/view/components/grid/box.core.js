import Component from '../component';
import {GRID_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';
import * as css from '@grid/core/services/css';
import {BoxCtrl} from '@grid/core/box/box.ctrl';

class BoxCore extends Component {
	constructor($element, theme) {
		super();

		this.element = $element[0];
		this.theme = theme;
	}

	onInit() {
		this.ctrl = new BoxCtrl(this.model, this.element);
		this.initTheme();
	}

	initTheme() {
		const element = this.element;
		this.using(this.theme.changed.watch(e => {
			if (e) {
				element.classList.remove(css.escapeAttr(`${GRID_PREFIX}-theme-${e.oldValue}`));
			}

			element.classList.add(css.escapeAttr(`${GRID_PREFIX}-theme-${this.theme.name}`));
		}));
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
		'_model': '<model'
	}
};