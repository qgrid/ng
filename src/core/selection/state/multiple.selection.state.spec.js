import MultipleSelectionState from './multiple.selection.state';
import Model from 'core/infrastructure/model';
import DataModel from 'core/data/data.model';
import ViewModel from 'core/view/view.model';
import SelectionModel from 'core/selection/selection.model';

let model, selectionState;

describe('multiple selection state', () => {
	before('init model', () => {
		Model.register('data', DataModel)
			.register('view', ViewModel)
			.register('selection', SelectionModel);

		model = new Model();

		model
			.data({
				rows: [{
					'id': 101,
					'lastName': 'Doe',
					'firstName': 'John',
					'age': 33
				}, {
					'id': 102,
					'lastName': 'Smith',
					'firstName': 'David',
					'age': 30
				}]
			})
			.selection({
				mode: 'multiple'
			});
	});

	describe('row unit', () => {
		before('set selection model', () => {
			model.selection({
				unit: 'row',
				key: {
					row: row => row.id
				},
				items: [102]
			});

			selectionState = new MultipleSelectionState(model);
		});

		describe('entries function', () => {
			it('should return selected rows by set keys', () => {
				const entries = selectionState.entries();

				expect(entries.length).to.equal(1);
				expect(entries[0].id).to.equal(102);
			});
		});
	});
});