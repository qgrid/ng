'use strict';

import * as u from './utility';

describe('utility', () => {

	describe('assign', () => {
		function testObject() {
			return {
				foo: 1,
				bar: {
					baz: 'hello'
				}
			};
		}

		it('should not change target when pass null', () => {
			let actual = testObject();
			const expected = testObject();

			u.assign(actual, null);
			expect(expected).to.deep.equal(actual);
		});


		it('should not change target pass empty object', () => {
			let actual = testObject();
			const expected = testObject();

			u.assign(actual, null);
			expect(expected).to.deep.equal(actual);
		});
	});

});