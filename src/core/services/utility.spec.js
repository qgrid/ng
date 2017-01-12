'use strict';

import {isObject} from './utility';

describe('utility', () => {

	describe('isObject', () => {

		it('should return false when passing number', () => {
			assert.isFalse(isObject(12));
		});

		it('should return true when passing empty object', () => {
			assert.isTrue(isObject({}));
		});

	});

});