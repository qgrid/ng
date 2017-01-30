import {getValue} from './column.service';

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
});