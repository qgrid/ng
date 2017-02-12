import Component from '../component';
import {getFactory as valueFactory, set as setValue} from 'ng/services/value';
import BodyView from 'core/body/body.view';
import HeadView from 'core/head/head.view';
import FootView from 'core/foot/foot.view';
import LayoutView from 'core/layout/layout.view';
import GroupView from 'core/group/group.view';
import PivotView from 'core/pivot/pivot.view';
import NavigationView from 'core/navigation/navigation.view';
import HighlightView from 'core/highlight/highlight.view';
import SortView from 'core/sort/sort.view';
import EditView from 'core/edit/edit.view';
import {GRID_NAME} from 'src/definition';

class ViewCore extends Component {
	constructor($element, $document) {
		super();

		this.element = $element[0];
		this.document = $document[0];
	}

	onInit() {
		const model = this.model;
		const document = this.document;
		const markup = this.root.markup;

		this.head = new HeadView(model);
		this.body = new BodyView(model, valueFactory);
		this.foot = new FootView(model, valueFactory);
		this.layout = new LayoutView(model, markup);
		this.group = new GroupView(model, valueFactory);
		this.pivot = new PivotView(model, valueFactory);
		this.nav = new NavigationView(model, document);
		this.highlight = new HighlightView(model, markup);
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

	get pagination(){
		return this.model.pagination();
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