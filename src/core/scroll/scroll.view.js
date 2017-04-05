import View from '../view/view';
import log from 'core/infrastructure/log';

export default class ScrollView extends View {
	constructor(model, table, scroll, apply) {
		super(model);

		const scrollState = model.scroll();
		this.table = table;
		this.y = {
			context: scroll({
				threshold: scrollState.y.threshold,
				apply: apply,
				fetch: scrollState.y.fetch
			})
		};

		model.scrollChanged.watch(e => {
			if (e.hasChanges('position')) {
				this.invalidate();
			}
		});

		switch (scrollState.mode) {
			case 'virtual': {
				model.viewChanged.watch(() => {
					this.y.context.container.reset();
				});
			}
				break;
			default:
				model.paginationChanged.watch(() => {
					this.y.context.container.reset();
				});
		}
	}

	invalidate() {
		log.info('layout', 'invalidate scroll');

		const table = this.table;
		const scroll = this.model.scroll();
		table.head.scrollLeft(scroll.position.left);
		table.foot.scrollLeft(scroll.position.left);
	}

	get mode() {
		return this.model.scroll().mode;
	}
}