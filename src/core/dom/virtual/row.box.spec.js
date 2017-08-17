import {RowBox} from './row.box';

describe('RowBox', () => {
	let row = {
		dataIndex: 10
	};

	describe('key', () => {
		let rowBox = new RowBox();
		it('should return index of row', () => {
			expect(rowBox.key(row)).to.equal(10);
		});
	});
});
