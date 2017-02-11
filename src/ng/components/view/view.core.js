import Component from '../component';
import {getFactory as valueFactory, set as setValue} from 'ng/services/value';
import BodyView from 'core/view/view.body';
import HeadView from 'core/view/view.head';
import FootView from 'core/view/view.foot';
import GroupView from 'core/view/view.group';
import PivotView from 'core/view/view.pivot';
import NavigationView from 'core/view/view.navigation';
import HighlightView from 'core/view/view.highlight';
import SortView from 'core/view/view.sort';
import EditView from 'core/view/view.edit';
import {GRID_PREFIX, GRID_NAME} from 'src/definition';

class ViewCore extends Component {
	constructor($element, $document) {
		super();

		this.element = $element[0];
		this.document = $document[0];
	}

	onInit() {
		const model = this.model;

		this.head = new HeadView(model);
		this.body = new BodyView(model, valueFactory);
		this.foot = new FootView(model, valueFactory);
		this.group = new GroupView(model, valueFactory);
		this.pivot = new PivotView(model, valueFactory);
		this.nav = new NavigationView(model, this.document);
		this.highlight = new HighlightView(model, this.element);
		this.sort = new SortView(model);
		this.edit = new EditView(model, setValue);
	}

	templateUrl(key) {
		return `qgrid.${key}.tpl.html`;
	}

	get model() {
		return this.root.model;
	}

	get visibility() {
		return this.model.visibility();
	}

	get rows() {
		return this.model.data().rows;
	}
}

ViewCore.$inject = ['$element', '$document'];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
}