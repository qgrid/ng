import {Command} from '@grid/core/command';
import {noop} from '../utility';

export class Composite {
	static func(list, reduce = noop, memo = null) {
		return (...args) => {
			for (const f of list) {
				memo = reduce(memo, f(...args));
			}

			return memo;
		};
	}

	static command(...list) {
		return new Command({
			canExecute: (...args) => {
				return list.reduce((memo, cmd) => memo || cmd.canExecute(...args), false);
			},
			execute: (...args) => {
				return list
					.filter(cmd => cmd.canExecute(...args))
					.reduce((cmd, memo) => memo || cmd.execute(...args), false);
			}
		});
	}

	static list(...list) {
		return list.reduce((xs, memo) => memo.concat(xs), []);
	}

	static object(...list) {
		return Object.assign({}, ...list);
	}
}