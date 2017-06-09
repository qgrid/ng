export class Xml {
	read(data) {
		const parser = new DOMParser();
		const xml = parser.parseFromString(data, 'text/xml');
		return xml;
	}
}