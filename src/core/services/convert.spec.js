import * as Convert from './convert';

describe('Convert', () => {
	describe('parseText', () => {
		const parseText = Convert.parseFactory('text');

		it('should parse Number to String', () => {
			expect(parseText(123)).to.equal('123');
		});
		it('should parse Number to String', () => {
			expect(parseText(-123)).to.equal('-123');
		});
		it('should parse Number to String', () => {
			expect(parseText(-1e04)).to.equal('-10000');
		});
		it('should return null if argument is empty', () => {
			expect(parseText(null)).to.equal(null);
		});
		it('should return "undefined" if argument is undefined', () => {
			expect(parseText(undefined)).to.equal('undefined');
		});
	});

	describe('parseNumber', () => {
		const parseNumber = Convert.parseFactory('number');

		it('should parse String of number to Number', () => {
			expect(parseNumber('123')).to.equal(123);
		});
		it('should parse String of number to Number', () => {
			expect(parseNumber('-123')).to.equal(-123);
		});
		it('should parse String of number to Number', () => {
			expect(parseNumber('0.123')).to.equal(0.123);
		});
		it('should parse String of number to Number', () => {
			expect(parseNumber('-1e04')).to.equal(-10000);
		});
		it('should return null if argument is null', () => {
			expect(parseNumber('text')).to.equal(null);
		});
		it('should return null if argument is null', () => {
			expect(parseNumber(null)).to.equal(null);
		});
		it('should return null if argument is null', () => {
			expect(parseNumber(undefined)).to.equal(null);
		});
	});	

	describe('parseDate', () => {
		const parseDate = Convert.parseFactory('date');

		it('should parse String of date to Date', () => {
			expect(+(parseDate('2017.05.05'))).to.be.equal(+(new Date('2017.05.05')));
		});
		it('should return null if argument is null', () => {
			expect(parseDate(null)).to.equal(null);
		});
		it('should return null if argument is null', () => {
			expect(parseDate(undefined)).to.equal(null);
		});
	});

	describe('parseBool', () => {
		const parseBool = Convert.parseFactory('bool');

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
		it('should return null if argument is null', () => {
			expect(parseBool(null)).to.equal(null);
		});
		it('should return null if argument is null', () => {
			expect(parseBool(undefined)).to.equal(null);
		});
	});
});
