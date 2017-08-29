import {Model} from '../infrastructure/model';
import {CommandManager} from '../command/command.manager';
import {GroupModel} from './group.model';
import {ViewModel} from '../view/view.model';
import {ActionModel} from '../action/action.model';
import {NavigationModel} from '../navigation/navigation.model';
import {GroupView} from './group.view';

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
	let model;
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

	Model.register('group', GroupModel)
		.register('view', ViewModel)
		.register('action', ActionModel)
		.register('navigation', NavigationModel);

	model = new Model();
	model.view({
		columns: columns
	});
	model.navigation({
		cell: 'CELL'
	});

	let commandManager = new CommandManager();
	let groupView = new GroupView(model, commandManager);

	describe('toggleStatus', () => {
		it('execute() should toggle node.state from expand to collapse', () => {
			let command = groupView.toggleStatus;
			command.execute(node);
			let result = groupView.status(node);
			expect(result).to.equal('collapse');
		});

		it('should return true if canExecute', () => {
			let command = groupView.toggleStatus;
			let result = command.canExecute(node);
			expect(result).to.equal(true);
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
	});

	describe('value', () => {
		it('should return value', () => {
			let result = groupView.value(node);
			expect(result).to.equal('name');
		});
	});
});
