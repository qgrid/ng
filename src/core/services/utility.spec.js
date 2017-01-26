import {isObject} from './utility';

describe('utility', () => {

	describe('isObject', () => {

		it('should return false when passing number', () => {
			expect(isObject(12)).to.be.false;
		});

		it('should return true when passing empty object', () => {
			expect(isObject({})).to.be.true;
		});

	});

});