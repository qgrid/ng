import View from '../view/view';
import log from 'core/infrastructure/log';

export default class ScrollView extends View {
	constructor(model, table, vscroll, service, apply) {
		super(model);

		const scroll = model.scroll;
		this.table = table;
		this.y = {
			context: vscroll({
				threshold: model.pagination().size,
				apply: apply,
				fetch: (skip, take, d) => {
					if (scroll().mode === 'virtual') {
						const rows = model.data().rows;
						if (rows.length > take) {
							d.resolve(skip + take + model.pagination().size);
						}
						else {
							d.resolve(rows.length);
							//service.invalidate('scroll');
						}
					}
				}
			})
		};

		model.scrollChanged.watch(e => {
			if (e.hasChanges('left')) {
				this.invalidate();
			}
		});

		switch (scroll().mode) {
			case 'virtual': {
				model.viewChanged.watch(() => {
					this.y.context.container.reset();
				});

				this.y.context.container.drawEvent.on(e =>
					apply(() =>
						this.model.pagination({
							current: Math.floor(e.position / model.pagination().size),
							count: this.y.context.container.total
						}, {
							behavior: 'core'
						})
					)
				);

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
		table.head.scrollLeft(scroll.left);
		table.foot.scrollLeft(scroll.left);
	}

	get mode() {
		return this.model.scroll().mode;
	}
}