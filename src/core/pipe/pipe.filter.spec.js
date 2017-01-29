import filter from './pipe.filter';

describe('pipe filter', () => {
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