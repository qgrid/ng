import Middleware from './pipe.middleware';

describe('Middleware', () => {
	it('should have default value for stages', () => {
		let pipeline = new Middleware();
		expect(pipeline.stages).to.be.an('array').and.to.be.empty;
	});

	it('should return promise', () => {
		let pipeline = new Middleware();
		expect(pipeline.fetch()).to.be.a('promise');
	});

	it('should call first stage with initial data', (done) => {
		let pipeline = new Middleware([
			(data, ctx, next) => {
				expect(data).to.eql([1, 2, 3]);
				next(data);
			}
		]);

		pipeline.fetch({}, [1, 2, 3]).then(() => done());
	});

	it('should pass handled data to the next stage', (done) => {
		let pipeline = new Middleware([
			(data, ctx, next) => {
				next(data.slice(1));
			},
			(data, ctx, next) => {
				expect(data).to.eqls([2, 3]);
				next(data.slice(1));
			}
		]);

		pipeline.fetch({}, [1, 2, 3]).then((data) => {
			expect(data).to.eqls([3]);
			done();
		});
	});
});