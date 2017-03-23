import {isUndefined} from './utility';

export function css(element, property, value) {
	const normalizedProperty = normalize(property);
	if (isUndefined(value)) {
		return element.style[normalizedProperty];
	} else {
		element.style[normalizedProperty] = value;
		return normalizedProperty;
	}
}

function normalize(property) {
	return property.replace(/-([a-z])/g, upperFirst);
}

function upperFirst(match, letter) {
	return letter.toUpperCase();
}

export class Element {
	constructor(element) {
		this.element = element;
		this.origin = {
			styles: {}
		};
	}

	style(settings) {
		const element = this.element;
		const originStyles = this.origin.styles;
		for (let [key, value] of Object.entries(settings)) {
			const property = css(element, key, value);
			if (!originStyles.hasOwnProperty(property)) {
				originStyles[property] = element.style[property];
			}
		}
	}

	reset() {
		this.style(this.origin.styles);
	}
}