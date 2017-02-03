import {clone} from '../services/utility';
import Pipe from './pipe';

const pipes = ['filter', 'sort', 'pagination'];

export default function pipeSetup(model, service) {
	const data = model.data();

	if (data.pipe && data.pipe.length) {
		service.invalidate();
		return;
	}

	if (data.rows.length) {
		defaults(model);
		service.invalidate();
	} else {
		let off = model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('rows')) {
				defaults(model);
				service.invalidate();
				off();
			}
		});
	}
}

function defaults(model) {
	const data = model.data();
	const stages = [];
	const rows = data.rows;
	stages.push(fetchFactory(rows));

	pipes.forEach(p => {
		stages.push(Pipe[p]);
	});

	model.data({
		pipe: stages
	});
}

function fetchFactory(rows) {
	const cloned = clone(rows);
	return (data, ctx, next) => next(cloned);
}
