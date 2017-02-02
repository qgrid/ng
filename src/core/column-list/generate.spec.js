import {generate} from './generate';

describe('column generate', () => {
	it('should return empty array without parameters', () => {
		expect(generate()).to.eql([]);
	});

	it('should return empty array when passed empty array', () => {
		expect(generate([])).to.eql([]);
	});

	it('should prettify keys of passed object', () => {
		
		expect(generate()).to.be.false;
	});
});