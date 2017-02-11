import View from 'core/view/view';
// import Command from 'core/infrastructure/command';
// import * as columnService from 'core/column/column.service';
// import * as sortService from 'core/sort/sort.service';
//import {noop} from 'core/services/utility';

export default class LayoutView extends View {
	constructor(model, markup) {
		super(model);
		this.model = model;
		this.markup = markup;

		this.onInit();
	}

	onInit() {
		const model = this.model;
		const markup = this.markup;

		model.layoutChanged.on(e => {
			if (e.changes.hasOwnProperty('columns')) {
				const columns = e.state.columns;
				for (let [key, context] of Object.entries(columns)) {
					if(key === column.key) {
						this.$element.css({
							'width': context.width + 'px',
							'max-width': context.width + 'px',
							'min-width': context.width + 'px'
						});
					}
				}
			}

			if(e.changes.hasOwnProperty('scroll')){
				markup.headView.scrollLeft = e.state.scroll.left;
				markup.footView.scrollLeft = e.state.scroll.left;
			}
		});
	}
}