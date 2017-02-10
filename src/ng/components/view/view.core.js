import Component from '../component';
import {getFactory as valueFactory} from 'ng/services/value';
import BodyView from 'core/view/view.body';
import HeadView from 'core/view/view.head';
import FootView from 'core/view/view.foot';
import GroupView from 'core/view/view.group';
import PivotView from 'core/view/view.pivot';
import {GRID_NAME} from 'src/definition';

class ViewCore extends Component {
	constructor($element) {
		super();

		this.$element = $element;
		this.head = null;
		this.body = null;
		this.foot = null;
		this.group = null;
		this.pivot = null;
	}

	onInit() {
		const model = this.model;

		this.head = new HeadView(model);
		this.body = new BodyView(model, valueFactory);
		this.foot = new FootView(model, valueFactory);
		this.group = new GroupView(model, valueFactory);
		this.pivot = new PivotView(model, valueFactory);
	}

	templateUrl(key) {
		return `qgrid.${key}.tpl.html`;
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

ViewCore.$inject = ['$element'];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
}