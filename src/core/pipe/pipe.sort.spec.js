import sort from './pipe.sort';

describe('sort pipe', () => {
	const list = [{
		name: 'Alan',
		age: 30
	}, {
		name: 'Bob',
		age: 45
	}, {
		name: 'Bob',
		age: 40
	}, {
		name: 'James',
		age: 40
	}];

	const data = () => {
		return {
			columns: [{
				key: 'name'
			}, {
				key: 'age'
			}]
		}
	};

	it('should sort by asc', () => {
		let ctx = {
			model: {
				data: data,

				sort: () => {
					return {by: [{name: 'asc'}]}
				}
			}
		};

		sort(list, ctx, (data) => {
			expect(data[0].name).to.be.equal('Alan');
			expect(data[1].name).to.be.equal('Bob');
			expect(data[2].name).to.be.equal('Bob');
			expect(data[3].name).to.be.equal('James');
		});
	});

	it('should sort by desc', () => {
		let ctx = {
			model: {
				data: data,

				sort: () => {
					return {by: [{name: 'desc'}]}
				}
			}
		};

		sort(list, ctx, (data) => {
			expect(data[0].name).to.be.equal('James');
			expect(data[1].name).to.be.equal('Bob');
			expect(data[2].name).to.be.equal('Bob');
			expect(data[3].name).to.be.equal('Alan');

		});
	});

	it('should sort by asc then by desc', () => {
		let ctx = {
			model: {
				data: data,

				sort: () => {
					return {by: [{name: 'asc'}, {age: 'desc'}]}
				}
			}
		};

		sort(list, ctx, (data) => {
			expect(data[0]).to.be.eql({name: 'Alan', age: 30});
			expect(data[1]).to.be.eql({name: 'Bob', age: 45});
			expect(data[2]).to.be.eql({name: 'Bob', age: 40});
			expect(data[3]).to.be.eql({name: 'James', age: 40});
		});
	});

	it('should sort by desc then by asc', () => {
		let ctx = {
			model: {
				data: data,

				sort: () => {
					return {by: [{age: 'desc'}, {name: 'asc'}]}
				}
			}
		};

		sort(list, ctx, (data) => {
			expect(data[0]).to.be.eql({name: 'Bob', age: 45});
			expect(data[1]).to.be.eql({name: 'Bob', age: 40});
			expect(data[2]).to.be.eql({name: 'James', age: 40});
			expect(data[3]).to.be.eql({name: 'Alan', age: 30});
		});
	});
});