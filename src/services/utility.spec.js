'use strict';

import * as u from './utility';

describe('utility assign', () => {

	function testObject() {
		return {
			foo: 1,
			bar: {
				baz: 'hello'
			}
		};
	}

	it('pass null should not change target', () => {
		let actual = testObject();
		const expected = testObject();

		u.assign(actual, null);
		expect(expected).to.deep.equal(actual);
	});


	it('pass empty object should not change target', () => {
		let actual = testObject();
		const expected = testObject();

		u.assign(actual, null);
		expect(expected).to.deep.equal(actual);
	});
});