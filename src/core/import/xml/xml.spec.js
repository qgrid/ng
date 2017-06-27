import {Xml} from './xml';

const xml = new Xml();

describe('xml parser', () => {
	it('should return empty array', () => {
		expect(xml.read()).to.eql([]);
	});
	it('should return empty array when passed empty string', () => {
		expect(xml.read('')).to.eql([]);
	});
});