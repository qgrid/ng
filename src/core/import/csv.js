import {CsvReader} from '../io';

function lineToObj(line) {
	const result = {};
	for (let i = 0, length = line.length; i < length; i++) {
		result[i] = line[i];
	}
	return result;
}

export class Csv {
	read(text) {
		const reader = new CsvReader();
		const lines = reader.read(text);
		return lines.map(lineToObj);
	}
}