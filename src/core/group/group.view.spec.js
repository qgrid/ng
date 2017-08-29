import {CommandManager} from '../command/command.manager';
import {GroupView} from './group.view';
import {modelFactory} from '../test/model.factory';

describe('Group View', () => {
	let node;

	beforeEach('reset node', () => {
		node = {
			children: [1,2,3,4,5],
			state: {
				expand: true
			},
			level: 6,
			key: 'name',
			type: 'group'
		};
	});

	window.ENV = {
		PRODUCTION: false
	};

	let columns = [
		[{
			key: 'id',
			model: {
				type: 'group',
				offset: 5
			}
		}],
		[{
			key: 'name'
		}],
		[{
			key: 'age'
		}]
	];

	let model = modelFactory();

	model.view({
		columns: columns
	});

	let commandManager = new CommandManager();
	let groupView = new GroupView(model, commandManager);

	describe('toggleStatus', () => {
		it('execute() should toggle node.state', () => {
			let command = groupView.toggleStatus;
			command.execute(node);
			let result = groupView.status(node);
			expect(result).to.equal('collapse');
			command.execute(node);
			result = groupView.status(node);
			expect(result).to.equal('expand');
		});

		it('should return true if canExecute', () => {
			let command = groupView.toggleStatus;
			let result = command.canExecute(node);
			expect(result).to.equal(true);
		});

		it('should return false if can`tExecute', () => {
			delete node.type;
			let command = groupView.toggleStatus;
			let result = command.canExecute(node);
			expect(result).to.equal(false);
		});
	});

	describe('count', () => {
		it('should return length of node.children or node.rows', () => {
			let result = groupView.count(node);
			expect(result).to.equal(5);
		});
	});

	describe('status', () => {
		it('should return status', () => {
			let result = groupView.status(node);
			expect(result).to.equal('expand');
		});
	});

	describe('offset', () => {
		it('should return offset', () => {
			let result = groupView.offset(node);
			expect(result).to.equal(30); // model.offset = 5 * node.level = 6 == 30
		});

		it('should return 0 if no matching model.type', () => {
			columns[0][0].model.type = null;
			let result = groupView.offset(node);
			expect(result).to.equal(0);
		});
	});

	describe('value', () => {
		it('should return value', () => {
			let result = groupView.value(node);
			expect(result).to.equal('name');
		});
	});
});
