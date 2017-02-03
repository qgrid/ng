import Path from './path';

describe('path service', () => {
	describe('compile', () => {
		const compile = Path.compile;

		it('should return function', () => {
			expect(compile()).to.be.a('function');
		});

		it('should return value by path', () => {
			const path = 'name.last';
			const item = {
				name: {
					last: 'Doe',
					first: 'John'
				}
			};

			const value = compile(path);

			expect(value(item)).to.equal(item.name.last);
		});

		it('should set value by path', () => {
			const path = 'name.last';
			const item = {
				name: {
					last: 'Doe',
					first: 'John'
				}
			};

			const value = compile(path);

			value(item, 'Johnson');
			expect(item.name.last).to.equal('Johnson');
		});
	});
});