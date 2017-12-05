import { jobLine } from '@grid/core/services';
import { Log } from '@grid/core/infrastructure';
import { View } from '@grid/core/view/view';
import { PipeUnit } from '../pipe/pipe.unit';

export class ViewCtrl extends View {
	constructor(view, gridService) {
		super(view.model);

		this.view = view;
		this.watch(gridService);
	}

	invalidate() {
		const style = this.view.style;
		if (style.needInvalidate()) {
			const rowMonitor = style.monitor.row;
			const cellMonitor = style.monitor.cell;

			const domCell = cellMonitor.enter();
			const domRow = rowMonitor.enter();
			try {
				style.invalidate(domCell, domRow);
			}
			finally {
				rowMonitor.exit();
				cellMonitor.exit();
			}
		}
	}

	triggerLine(service, timeout) {
		const job = jobLine(timeout);
		const jobUnits = [PipeUnit.default];
		const fold = this.model.pipe().reducer;
		return (name, changes, units) => {
			jobUnits.push(...units);
			job(() => {
				jobUnits.reduce(fold, []).forEach(unit => service.invalidate(name, changes, unit));
				jobUnits.length = 0;
			});
		};
	}

	watch(service) {
		const sceneJob = jobLine(10);
		const triggerJob = this.triggerLine(service, 10);
	
		const model = this.model;
		const triggers = model.pipe().triggers;

		triggerJob('grid', {}, [PipeUnit.default]);

		Object.keys(triggers)
			.forEach(name =>
				this.using(model[name + 'Changed']
					.watch(e => {
						if (e.tag.behavior === 'core') {
							return;
						}

						const units = [];
						const trigger = triggers[name];
						for (const key in e.changes) {
							const unit = trigger[key];
							if (unit) {
								units.push(unit);
							}
						}

						triggerJob(name, e.changes, units);
					})));

		model.sceneChanged.watch(e => {
			if (e.hasChanges('round')) {
				Log.info(e.tag.source, `scene ${e.state.round}`);

				if (e.state.status === 'start') {
					sceneJob(() => {
						Log.info(e.tag.source, 'scene stop');

						model.scene({
							round: 0,
							status: 'stop'
						}, {
								source: 'view.ctrl',
								behavior: 'core'
							});
					});
				}
			}
		});
	}
}