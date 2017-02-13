import {GRID_NAME} from 'ng/definition';

let transfer = null;
export default class DragService {
	constructor() {
	}

	static get mimeType() {
		return `application/x-${GRID_NAME}+json`;
	}

	static get transfer() {
		return transfer;
	}

	static set transfer(value) {
		transfer = value;
	}

	static decode(source) {
		return JSON.parse(source);  // eslint-disable-line angular/json-functions
	}

	static encode(source) {
		return JSON.stringify(source);  // eslint-disable-line angular/json-functions
	}
}