import {XmlReader} from '../io';

export class Xml {
	read(text) {
		const reader = new XmlReader();
		return reader.read(text);
	}
}