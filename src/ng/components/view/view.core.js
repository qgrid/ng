import Component from '../component';
import {getFactory as valueFactory} from 'ng/services/value';
import GridView from 'core/view/view.grid';
import BodyView from 'core/view/view.body';
import HeadView from 'core/view/view.head';
import FootView from 'core/view/view.foot';
import GroupView from 'core/view/view.group';
import {GRID_NAME} from 'src/definition';

class ViewCore extends Component {
	constructor($element, theme) {
		super();

		this.$element = $element;
		this.theme = theme;

		this.grid = null;
		this.head = null;
		this.body = null;
		this.foot = null;
		this.group = null;

		this.initTheme();
	}

	onInit() {
		const model = this.model;

		this.grid = new GridView(model, valueFactory);
		this.head = new HeadView(model);
		this.body = new BodyView(model);
		this.foot = new FootView(model);
		this.group = new GroupView(model, valueFactory);
	}

	templateUrl(key) {
		return `qgrid.${key}.tpl.html`;
	}

	initTheme() {
		this.$element[0].classList.add(`theme-${this.theme.name}`);

		this.theme.changed.on(e => {
			this.$element[0].classList.remove(`theme-${e.oldValue}`);
			this.$element[0].classList.add(`theme-${e.newValue}`);
		});
	}

	get model() {
		return this.root.model;
	}

	get rows() {
		return this.model.view().rows;
	}

}

ViewCore.$inject = ['$element', 'qgridTheme'];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
}