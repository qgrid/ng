import * as Convert from './convert';
import {identity} from '../utility';

describe('Convert', () => {
	const testArray = [1, 3, 6, 9];
	const notPrimitiveArray = [new Map(), new Set()];
	const parseText = value => value;
	const parseNumber = value => value;
	const parseDate = value => value;
	const parseBool = value => value;

	describe('parseFactory', () => {
		it('should return parseText func if argument is text', () => {
			expect((Convert.parseFactory('text')).name).to.be.equals(parseText.name);
		});
		it('should return parseText func if argument is currency', () => {
			expect((Convert.parseFactory('currency')).name).to.be.equals(parseText.name);
		});
		it('should return parseNumber func if argument is number', () => {
			expect((Convert.parseFactory('number')).name).to.be.equals(parseNumber.name);
		});
		it('should return parseDate func if argument is date', () => {
			expect((Convert.parseFactory('date')).name).to.be.equals(parseDate.name);
		});
		it('should return parseBool func if argument is bool', () => {
			expect((Convert.parseFactory('bool')).name).to.be.equals(parseBool.name);
		});
		it('should return identity otherwise', () => {
			expect((Convert.parseFactory('smthvalue')).name).to.be.equals(identity.name);
		});
	});

	describe('getType', () => {
		it('should return "array" if argument is Array and not null', () => {
			expect(Convert.getType(testArray)).to.be.equal('array');
		});
		it('should return "collection" if argument is Array, not null and not primitive', () => {
			expect(Convert.getType(notPrimitiveArray)).to.be.equal('collection');
		});
		it('should return "number" if argument is Number or String of number', () => {
			expect(Convert.getType(23)).to.be.equal('number');
		});
		it('should return "bool" if argument is Boolean', () => {
			expect(Convert.getType(new Boolean())).to.be.equal('bool');
		});
		it('should return "date" if argument is Date', () => {
			expect(Convert.getType(new Date(2017))).to.be.equal('date');
		});
		it('should return "date" if argument is Date', () => {
			expect(Convert.getType(new Object())).to.be.equal('object');
		});
		it('should return "email" if argument is Email', () => {
			expect(Convert.getType('yahoo@mail.com')).to.be.equal('email');
		});
		it('should return "text" otherwise', () => {
			expect(Convert.getType('some text')).to.be.equal('text');
		});
	});

	describe('isPrimitive', () => {
		it('should be truthy, if argument is "date"', () => {
			expect(Convert.isPrimitive('date')).to.be.true;
		});
		it('should be truthy, if argument is "bool"', () => {
			expect(Convert.isPrimitive('bool')).to.be.true;
		});
		it('should be truthy, if argument is "text"', () => {
			expect(Convert.isPrimitive('text')).to.be.true;
		});
		it('should be truthy, if argument is "number"', () => {
			expect(Convert.isPrimitive('number')).to.be.true;
		});
		it('should be truthy, if argument is "email"', () => {
			expect(Convert.isPrimitive('email')).to.be.true;
		});
		it('should be falsy otherwise', () => {
			expect(Convert.isPrimitive('password')).to.be.false;
		});
	});
});

