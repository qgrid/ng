import * as Convert from './convert';

describe('Convert', () => {
	const parseText = Convert.parseFactory('text');
	const parseCurrency = Convert.parseFactory('currency');
	const parseNumber = Convert.parseFactory('number');
	const parseDate = Convert.parseFactory('date');
	const parseBool = Convert.parseFactory('bool');

	describe('parseFactory', () => {
		it('should parse Number to String', () => {
			expect(parseText(123)).to.equal('123');
		});
		it('should parse Number to String', () => {
			expect(parseCurrency(123)).to.equal('123');
		});
		it('should parse String of number to Number', () => {
			expect(parseNumber('123')).to.equal(123);
		});
		it('should parse String of date to Date', () => {
			expect(+(parseDate('2017.05.05'))).to.be.equal(+(new Date('2017.05.05')));
		});
		it('should return true if argument is "true"', () => {
			expect(parseBool('true')).to.equal(true);
		});
		it('should return false if argument is "false"', () => {
			expect(parseBool('false')).to.equal(false);
		});
		it('should return true if argument is true', () => {
			expect(parseBool(true)).to.equal(true);
		});
		it('should return false if argument is false', () => {
			expect(parseBool(false)).to.equal(false);
		});
	});
});

