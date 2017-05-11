import MultipleSelectionState from './multiple.selection.state';
import Model from 'core/infrastructure/model';
import DataModel from 'core/data/data.model';
import SelectionModel from 'core/selection/selection.model';

let model;
const data = [{
	'id': 101,
	'name': 'John Doe',
	'age': 34
}, {
	'id': 102,
	'name': 'David Smith',
	'age': 30
}, {
	'id': 103,
	'name': 'Lue Laserna',
	'age': 25
}];

const columns = [{
	key: 'id'
}, {
	key: 'name'
}, {
	key: 'age'
}];

describe('multiple selection state', () => {
	before('init model', () => {
		Model.register('data', DataModel)
			.register('selection', SelectionModel);

		model = new Model();

		model
			.data({
				rows: data,
				columns: columns
			})
			.selection({
				mode: 'multiple'
			});
	});

	describe('row unit', () => {
		before('init model', () => {
			model.selection({
				unit: 'row',
				key: {
					row: row => row.id
				}
			});
		});

		beforeEach('reset selection', () => {
			model.selection({
				items: [],
				entries: []
			});
		});

		describe('entries function', () => {
			it('should return selected rows when set keys', () => {
				model.selection({
					items: [101, 102]
				});
				const selectionState = new MultipleSelectionState(model);

				const entries = selectionState.entries();

				expect(entries.length).to.equal(2);
				expect(entries[0].id).to.equal(101);
				expect(entries[0].name).to.equal('John Doe');
				expect(entries[1].id).to.equal(102);
				expect(entries[1].name).to.equal('David Smith');
			});
		});

		describe('select function', () => {
			it('should be able to select multiple rows', () => {
				const selectionState = new MultipleSelectionState(model);

				selectionState.select(data[0]);
				selectionState.select(data[2]);

				const entries = selectionState.entries();
				expect(entries.length).to.equal(2);
				expect(entries[0].id).to.equal(101);
				expect(entries[0].name).to.equal('John Doe');
				expect(entries[1].id).to.equal(103);
				expect(entries[1].name).to.equal('Lue Laserna');
			});
		});

		describe('state function', () => {
			it('should return state of row', () => {
				const selectionState = new MultipleSelectionState(model);
				selectionState.select(data[0]);
				selectionState.select(data[1]);

				const states = data.map(row => selectionState.state(row));

				expect(states[0]).to.be.true;
				expect(states[1]).to.be.true;
				expect(states[2]).to.be.false;
			});
		});
	});

	describe('column unit', () => {
		before('init model', () => {
			model.selection({
				unit: 'column',
				key: {
					column: column => column.key
				}
			});
		});

		beforeEach('reset selection', () => {
			model.selection({
				items: [],
				entries: []
			});
		});

		describe('entries function', () => {
			it('should return selected columns when set keys', () => {
				model.selection({
					items: ['name', 'age']
				});
				const selectionState = new MultipleSelectionState(model);

				const entries = selectionState.entries();

				expect(entries.length).to.equal(2);
				expect(entries[0].key).to.equal('name');
				expect(entries[1].key).to.equal('age');
			});
		});

		describe('select function', () => {
			it('should be able to select multiple columns', () => {
				const selectionState = new MultipleSelectionState(model);

				selectionState.select(columns[0]);
				selectionState.select(columns[2]);

				const entries = selectionState.entries();
				expect(entries.length).to.equal(2);
				expect(entries[0].key).to.equal('id');
				expect(entries[1].key).to.equal('age');
			});
		});

		describe('state function', () => {
			it('should return state of column', () => {
				const selectionState = new MultipleSelectionState(model);
				selectionState.select(columns[0]);
				selectionState.select(columns[1]);

				const states = columns.map(col => selectionState.state(col));

				expect(states[0]).to.be.true;
				expect(states[1]).to.be.true;
				expect(states[2]).to.be.false;
			});
		});
	});

	describe('cell unit', () => {
		before('init model', () => {
			model.selection({
				unit: 'cell',
				key: {
					row: row => row.id,
					column: column => column.key
				}
			});
		});

		beforeEach('reset selection', () => {
			model.selection({
				items: [],
				entries: []
			});
		});

		describe('entries function', () => {
			it('should return selected columns when set keys', () => {
				model.selection({
					items: [{
						row: 102,
						column: 'name'
					}, {
						row: 103,
						column: 'age'
					}]
				});
				const selectionState = new MultipleSelectionState(model);

				const entries = selectionState.entries();

				expect(entries.length).to.equal(2);
				expect(entries[0].row.id).to.equal(102);
				expect(entries[0].row.name).to.equal('David Smith');
				expect(entries[0].row.age).to.equal(30);
				expect(entries[0].column.key).to.equal('name');
				expect(entries[1].row.id).to.equal(103);
				expect(entries[1].row.name).to.equal('Lue Laserna');
				expect(entries[1].row.age).to.equal(25);
				expect(entries[1].column.key).to.equal('age');
			});
		});
	});
});