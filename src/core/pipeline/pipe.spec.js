import Pipe from './pipe';

describe('pipe', () => {
	describe('filter', () => {
		let filter = Pipe.filter;

		it('should return function', () => {
			expect(filter).to.be.a('function');
		});

		it('should throw an exception if filter is not defined', () => {
			expect(() => filter([], {model: {}}, () => null)).to.throw(/notUndefined: model.filter/);
		});

		it('should throw an exception if match is not a function', () => {
			expect(() => filter([], {
				model: {
					filter: () => new Object()
				}
			}, () => null)).to.throw(/invokable: model.filter.match/);
		});

		it('should pass data to the next stage', (done) => {
			filter(
				[1, 2, 3], {
					model: {
						filter: () => {
							return {match: () => true}
						}
					}
				},
				(data) => {
					expect(data).to.eql([1, 2, 3]);
					done();
				});
		});
	});

	describe('pager', () => {
		let pagination = Pipe.pagination;

		it('should return a function', () => {
			expect(pagination).to.be.a('function');
		});

		it('should pass paginated data to the next stage', (done) => {
			pagination(
				[1, 2, 3], {
					model: {
						pagination: () => {
							return {
								current: 1,
								size: 1
							}
						}
					}
				},
				(data) => {
					expect(data).to.eql([2]);
					done();
				});
		});
	})
});