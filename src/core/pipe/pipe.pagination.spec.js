import pagination from './pipe.pagination';

describe('pipe pagination', () => {
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
});