import {FakeLayer} from './layer';

describe('FakeLayer', () => {
	let fakeLayer = new FakeLayer();

	describe('destroy', () => {
		it('should be undefined', () => {
			expect(fakeLayer.destroy()).to.equal(undefined);
		});
	});

});

