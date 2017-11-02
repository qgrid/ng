import {Command} from './command';
import {noop} from '../utility';

export class Composite {
	static function (functions, reducer = noop, memo = null) {
		return function () {
			const args = [].slice.apply(arguments);
			for (let i = 0, length = functions.length; i < length; i++) {
				const func = functions[i];
				memo = reducer(memo, func.apply(null, args));
			}
			return memo;
		};
	}

	static command() {
		const args = [].slice.apply(arguments);

		if (!args.length) {
			throw new Error('Can\'t compose empty list of commands.');
		}

		return new Command({
			canExecute: function () {
				return args.reduce((memo, command) => memo || command.canExecute.apply(null, [].slice.apply(arguments)), false);
			},
			execute: function () {
				const a = [].slice.apply(arguments);
				args.filter(c => c.canExecute.apply(null, a)).forEach(c => c.execute.apply(null, a));
			}
		});
	}
}