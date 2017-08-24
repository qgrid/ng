import {FilterView} from './filter.view';

describe('column generate', () => {
	let columnTest = {
		key: 'Key'
	};
	let model = {
		filter: () => {return {by: {'Key': null}}}
	};

	describe('column generate', () => {
		it('should return true if model contains given column`s key', () => {
			let filterView = new FilterView(model);
			let result = filterView.has(columnTest);
			expect(result).to.equal(true);
		});
	});
});