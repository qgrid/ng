import * as Merge from './merge';

describe('merge.service', () => {

	const testSettingsObject = {};

	const foo = Merge.merge(testSettingsObject);

	it('should return true if resultObject.updated === 3', () => {
		const resultObject = foo([1,2,3], [1,2,3,40,50,60,70,80], []);
		const res = resultObject.updated === 3;

		expect(res).to.be.equal(true);
	});

	it('should return true if resultObject.inserted === 5', () => {
		const resultObject = foo([1], [1,2,3,4,5,6], []);
		const res = resultObject.inserted === 5;

		expect(res).to.be.equal(true);
	});

	it('should return true if resultObject.removed === 5', () => {
		const resultObject = foo([1,2,3,4,5,6], [1], []);
		const res = resultObject.removed === 5;

		expect(res).to.be.equal(true);
	});
});
