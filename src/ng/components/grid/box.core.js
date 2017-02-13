import Component from '../component';
import {GRID_NAME} from 'ng/definition';
import {GRID_PREFIX} from 'core/definition';

class BoxCore extends Component {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
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

	get model() {
		return this._model || this.root.model;
	}
}

BoxCore.$inject = ['$element'];

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