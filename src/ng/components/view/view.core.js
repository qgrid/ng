import Component from '../component';
import {getFactory as valueFactory} from 'ng/services/value';
import BodyView from 'core/view/view.body';
import HeadView from 'core/view/view.head';
import FootView from 'core/view/view.foot';
import GroupView from 'core/view/view.group';
import PivotView from 'core/view/view.pivot';
import NavigationView from 'core/view/view.navigation';
import {GRID_PREFIX} from 'src/definition';

class ViewCore extends Component {
	constructor($element, theme) {
		super();

		this.$element = $element;
		this.theme = theme;

		this.head = null;
		this.body = null;
		this.foot = null;
		this.group = null;
		this.pivot = null;

		this.initTheme();
	}

	onInit() {
		const model = this.model;

		this.head = new HeadView(model);
		this.body = new BodyView(model, valueFactory);
		this.foot = new FootView(model, valueFactory);
		this.group = new GroupView(model, valueFactory);
		this.pivot = new PivotView(model, valueFactory);
		this.nav = new NavigationView(model, this.$element[0]);

		model.viewChanged.on(e => {
			model.navigation({
				rowCount: e.state.rows.length,
				columnCount: e.state.columns[0].length
			})
		});
	}

	templateUrl(key) {
		return `qgrid.${key}.tpl.html`;
	}

	initTheme() {
		this.$element[0].classList.add(`${GRID_PREFIX}-theme-${this.theme.name}`);

		this.theme.changed.on(e => {
			this.$element[0].classList.remove(`${GRID_PREFIX}-theme-${e.oldValue}`);
			this.$element[0].classList.add(`${GRID_PREFIX}-theme-${e.newValue}`);
		});
	}

	get model() {
		return this.root.model;
	}

	get visibility(){
		return this.model.visibility();
	}

	get rows() {
		return this.model.data().rows;
	}
}

ViewCore.$inject = ['$element', 'qgridTheme'];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_PREFIX}`
	}
}