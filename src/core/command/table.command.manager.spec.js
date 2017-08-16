import {TableCommandManager} from './table.command.manager';

describe('CompositeCommandManager', () => {
	let arrayOfCommands = [],
		i = 5,
		arr = [],
		testTable1 = {view: {isFocused: () => true}},
		testTable2 = {view: {isFocused: () => false}},
		apply = f => f();

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

	describe('filter', () => {
		it('should return filtered commands if ViewActive = true', () => {
			let tableCommandManager = new TableCommandManager(apply, testTable1);
			let filtered = tableCommandManager.filter(arrayOfCommands);
			expect(filtered.length).to.equal(2);
		});

		it('should return empty array if ViewActive = false', () => {
			let tableCommandManager = new TableCommandManager(apply, testTable2);
			let filtered = tableCommandManager.filter(arrayOfCommands);
			expect(filtered.length).to.equal(0);
		});
	});

});
