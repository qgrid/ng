import View from '../view/view';
import log from 'core/infrastructure/log';

export default class ScrollView extends View {
	constructor(model, table, vscroll, service, apply) {
		super(model);

		this.table = table;

		const scroll = model.scroll;

		this.y = {
			context: vscroll({
				threshold: model.pagination().size,
				apply: apply,
				rowHeight: model.row().height
			})
		};

		switch (scroll().mode) {
			case 'virtual': {
				// model.viewChanged.watch(() => {
				// 	this.y.context.container.reset();
				// });

				this.y.context.settings.fetch = (skip, take, d) => {
					this.model.pagination({
						current: Math.floor(skip / take)
					}, {
						source: 'scroll.view',
						behavior: 'core'
					});

					service.invalidate('scroll.view')
						.then(d.resolve(model.view().rows.length));
				};

				this.y.context.container.drawEvent.on(e =>
					apply(() =>
						this.model.pagination({
							current: Math.floor(e.position / model.pagination().size),
							count: this.y.context.container.total
						}, {
							source: 'scroll.view',
							behavior: 'core'
						})
					)
				);

				break;
			}
			default:
				model.paginationChanged.watch(() => {
					this.y.context.container.reset();
				});
		}


		model.scrollChanged.watch(e => {
			if (e.hasChanges('left')) {
				this.invalidate();
			}
		});
	}

	invalidate() {
		log.info('layout', 'invalidate scroll');

		const table = this.table;
		const scroll = this.model.scroll();
		table.head.scrollLeft(scroll.left);
		table.foot.scrollLeft(scroll.left);
	}

	get mode() {
		return this.model.scroll().mode;
	}
}