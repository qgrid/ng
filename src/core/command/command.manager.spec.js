import {CommandManager} from './command.manager';

describe('CommandManager', () => {
	let arrayOfCommand = [],
		i = 5,
		arr = [];

	while (i > 0) {
		if (i % 2 === 0) {
			arrayOfCommand.push({
				execute: () => arr.push(1),
				canExecute: () => true
			});
		} else {
			arrayOfCommand.push({
				execute: () => arr.push(2),
				canExecute: () => false
			});
		}
		i--;
	}

	describe('invoke', () => {
		it('should invoke each command', () => {
			let commandManager = new CommandManager();
			commandManager.invoke(arrayOfCommand);
			expect(arr.join(',')).to.equal('2,1,2,1,2');
		});
	});

	describe('filter', () => {
		it('should return filtered commands', () => {
			let commandManager = new CommandManager();
			let filtered = commandManager.filter(arrayOfCommand);
			expect(filtered.length).to.equal(2);
		});
	});

});

