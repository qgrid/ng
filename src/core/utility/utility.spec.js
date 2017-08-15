import {isObject, startCase} from './utility';
import * as Utility from './utility';

describe('utility', () => {
	describe('isObject', () => {
		it('should return false when passing number', () => {
			expect(isObject(12)).to.be.false;
		});

		it('should return true when passing empty object', () => {
			expect(isObject({})).to.be.true;
		});
	});

	describe('startCase', () => {
		it('should return prettified string from camel case', () => {
			const camel = 'lastName';
			expect(startCase(camel)).to.equal('Last Name');
		});

		it('should return prettified string from dot case', () => {
			const dotted = 'last.name';
			expect(startCase(dotted)).to.equal('Last Name');
		});

		it('should return capitalized abbreviation', () => {
			const withAbbr = 'userTIN';
			expect(startCase(withAbbr)).to.equal('User TIN');
		});
	});

	describe('noop', () => {
		let foo = Utility.noop();
		it('should check whether the noop function returns nothing', () => {
			expect(foo).to.equal(undefined);
		});
	});

	describe('yes', () => {
		let foo = Utility.yes();
		it('should check whether the yes function returns true', () => {
			expect(foo).to.equal(true);
		});
	});

	describe('no', () => {
		let foo = Utility.no();
		it('should check whether the no function returns false', () => {
			expect(foo).to.equal(false);
		});
	});

	describe('identity', () => {
		let foo = Utility.identity(123);
		it('should check whether the identity function returns its argument', () => {
			expect(foo).to.equal(123);
		});
	});

	describe('toCamelCase', () => {
		let foo = Utility.toCamelCase('camel', 'case');
		it('should return string transformed into camelCase', () => {
			expect(foo).to.equal('camelCase');
		});
	});

	describe('isEmail', () => {
		it('should validate an email address', () => {
			let foo = Utility.isEmail('1email1@gmail.com');
			expect(foo).to.equal(true);
		});
		it('should return false if passed incorrect email', () => {
			let foo = Utility.isEmail('@email.com');
			expect(foo).to.equal(false);
		});
	});
});