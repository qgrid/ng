import {generate} from './generate';

describe('column generate', () => {
	it('should return empty array without parameters', () => {
		expect(generate()).to.eql([]);
	});

	it('should return empty array when passed empty array', () => {
		expect(generate([])).to.eql([]);
	});

	it('should return prettified keys of passed rows', () => {
		const rows = [{
			lastName: 'Doe',
			firstName: 'John',
			birthday: '1/1/1970'
		}];
		expect(generate(rows)).to.eql(['Last Name', 'First Name', 'Birthday']);
	});
});