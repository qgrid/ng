import {CompositeCommandManager} from './composite.command.manager';
import {CommandManager} from './command.manager'

describe('CompositeCommandManager', () => {
	let arrayOfCommands = [],
		i = 5,
		arr = [];

	while (i > 0) {
		if (i % 2 === 0) {
			arrayOfCommands.push({
				execute: () => arr.push(1),
				canExecute: () => true
			});
		} else {
			arrayOfCommands.push({
				execute: () => arr.push(2),
				canExecute: () => false
			});
		}
		i--;
	}

	describe('invoke', () => {
		it('should invoke each command', () => {
			let commandManager = new CommandManager();
			let compositeCommandManager = new CompositeCommandManager(commandManager);
			compositeCommandManager.invoke(arrayOfCommands);
			expect(arr.join(',')).to.equal('2,1,2,1,2');
		});
	});

	describe('filter', () => {
		it('should return filtered commands', () => {
			let commandManager = new CommandManager();
			let compositeCommandManager = new CompositeCommandManager(commandManager);
			let filtered = compositeCommandManager.filter(arrayOfCommands);
			expect(filtered.length).to.equal(2);
		});
	});

});
