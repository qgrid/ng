// const KEY_DELIMETER = '-';

// function flatView(xml, separator = ', ') {
// 	const result = {};
// 	if (xml.nodeType === 1 && xml.hasChildNodes()) {
// 		for (let child of xml.childNodes) {
// 			const children = xml.getElementsByTagName(child.tagName);
// 			if (children.length > 1) {
// 				const items = [];
// 				for (let i = 0; i < children.length; i++) {
// 					items.push(children.item(i).textContent);
// 					if (i) {
// 						children.item(i).remove();
// 					}
// 				}
// 				result[child.nodeName] = items.join(separator);
// 			} else if (child.nodeType === 1) {
// 				const flatObject = flatView(child, separator);
// 				for (let [flatProp, flatValue] of Object.entries(flatObject)) {
// 					const name = flatProp === '#text' ? child.nodeName : child.nodeName + KEY_DELIMETER + flatProp;
// 					result[name] = flatValue;
// 				}
// 			} else if (child.nodeType === 3) {
// 				result[child.nodeName] = child.textContent;
// 			}
// 		}
// 	} else if (xml.nodeType === 3) {
// 		result[xml.nodeName] = xml.textContent;
// 	}
// 	return result;
// }

function toJson(xml) {
	const result = {};
	const first = xml.firstChild;
	if (xml.nodeType === 1 && xml.hasChildNodes()) {
		console.log(first);
		// for (let child of xml.childNodes) {
		// 	const children = xml.getElementsByTagName(child.tagName);
		// 	if (children.length > 1) {
		// 		const items = [];
		// 		for (let i = 0; i < children.length; i++) {
		// 			items.push(children.item(i).textContent);
		// 			if (i) {
		// 				children.item(i).remove();
		// 			}
		// 		}
		// 		result[child.nodeName] = items.join(separator);
		// 	} else if (child.nodeType === 1) {
		// 		const flatObject = toJson(child, separator);
		// 		for (let [flatProp, flatValue] of Object.entries(flatObject)) {
		// 			const name = flatProp === '#text' ? child.nodeName : child.nodeName + KEY_DELIMETER + flatProp;
		// 			result[name] = flatValue;
		// 		}
		// 	} else if (child.nodeType === 3) {
		// 		result[child.nodeName] = child.textContent;
		// 	}
		// }
	} else if (xml.nodeType === 3) {
		result[xml.nodeName] = xml.textContent;
	}
	return result;
}


export class Xml {
	read(data) {
		const parser = new DOMParser();
		const root = parser.parseFromString(data, 'text/xml').documentElement;
		toJson(root);
	}
}