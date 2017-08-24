import {getValue, expand, collapse} from './column.service';
import {find} from './column.service';

describe('column service', () => {
	describe('value', function () {
		it('should return field by key', () => {
			let value = getValue({key: 'name'})({name: 'John'});
			expect(value).to.be.equal('John');
		});

		it('should return value according to value function', () => {
			let value = getValue({key: 'name', value: row => row.name + ' Jr.'})({name: 'John'});
			expect(value).to.be.equal('John Jr.');
		});
	});

	describe('find', () => {
		const columns = [
			{
				key: 'name'
			},
			{
				key: 'age',
				title: 'Age'
			},
			{
				key: 'gender'
			}
		];

		it('should return column object', () => {
			expect(find(columns, 'age')).to.be.eqls({key: 'age', title: 'Age'});
		});

		it('should return null if key is not found', () => {
			expect(find(columns, 'missingKey')).to.be.null;
		});
	});

	const col = (key, rowspan, colspan) => ({
		model: {key: key},
		rowspan: rowspan,
		colspan: colspan
	});

	const lineKeyFactory = line => i => line[i].model.key;
	const viewKeyFactory = view => (i, j) => view[i][j].model.key;

	const columnRows = [
		[col('A', 1, 1), col('B', 1, 2), col('C', 1, 1)],
		[col('D', 3, 1), col('E', 1, 2), col('F', 1, 1)],
		[col('G', 1, 1), col('H', 1, 1), col('I', 1, 1)],
		[col('J', 1, 3)],
	];

	describe('expand', () => {
		const view = expand(columnRows);
		const key = viewKeyFactory(view);

		const etalonView = [
			['A', 'B', 'B', 'C'],
			['D', 'E', 'E', 'F'],
			['D', 'G', 'H', 'I'],
			['D', 'J', 'J', 'J'],
		];

		for (let i = 0; i < etalonView.length; i++) {
			const etalonRow = etalonView[i];
			for (let j = 0; j < etalonRow.length; j++) {
				expect(key(i, j)).to.equals(etalonRow[j]);
			}
		}
	});

	describe('collapse', () => {
		const view = expand(columnRows);
		const line = collapse(view);
		const key = lineKeyFactory(line);
		expect(line.length).to.equals(2)
		expect(key(0)).to.equals('D');
		expect(key(1)).to.equals('J');
	});
});