import * as sortService from './sort.service';


describe('sort.service', () => {

	const sortByAge = {age: 'desc'};
	const sortByGender = {gender: 'asc'};
	const sortBy = [sortByAge, sortByGender];

	describe('key', () => {
		it('should return first key of object', () => {
			const key = sortService.key(sortByAge);
			expect(key).to.equal('age');
		});

		it('should throw exception on empty object', () => {
			expect(() => sortService.key({})).to.throw('not defined');
		});
	});

	describe('direction', () => {
		it('should return the value of first key', () => {
			const dir = sortService.direction(sortByGender);
			expect(dir).to.equals('asc');
		});

		it('should throw exception on empty object', () => {
			expect(() => sortService.direction({})).to.throw('not defined');
		});
	});

	describe('index', () => {
		it('should return index >= 0 when match', () => {
			const index = sortService.index(sortBy, 'gender');
			expect(index).to.equals(1);
		});

		it('should return object value from first key', () => {
			const index = sortService.index(sortBy, 'foo');
			expect(index).to.equals(-1);
		});
	});

	describe('map', () => {
		it('should return object with correct keys', () => {
			const map = sortService.map(sortBy);
			expect(Object.keys(map).length).to.equals(2);
			expect(map.age).to.equals('desc');
			expect(map.gender).to.equals('asc');
		});
	});
});