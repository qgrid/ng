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
const DOMNodeTypes = {
	ELEMENT: 1,
	TEXT: 3,
	CDATA: 4,
	COMMENT: 8,
	DOCUMENT: 9
};

// function isPartOfArray(child) {
// 	const parent = child.parentNode;
// 	const children = parent.getElementsByTagName(child.tagName);
// 	return children.length > 1;
// }
function isText(xml) {
	return xml.nodeType === DOMNodeTypes.TEXT;
}
// function isElement(xml) {
// 	return xml.nodeType === DOMNodeTypes.ELEMENT;
// }
function isNodeList(xml) {
	return xml instanceof NodeList;
}
// function isArrayNodeList(xml) {
// 	const length1 = xml.length;
// 	const tag = xml.firstChild.tagName;
// return
// }
//
// function generateArray(child) {
// 	const parent = child.parentNode;
// 	const children = parent.getElementsByTagName(child.tagName);
// 	const items = [];
// 	for (let i = 0; i < children.length; i++) {
// 		if (isText(children.item(i))) {
// 			items.push(children.item(i).textContent);
// 		} else {
// 			items.push(toJson(children.item(i)));
// 		}
// 	}
// 	return items;
// }
//
// function toJson(xml) {
// 	if (isText(xml)) {
// 		return xml.nodeValue;
// 	} else if (isElement(xml) && !isPartOfArray(xml)) {
// 		console.log('is standalone element', xml);
// 	} else if (isElement(xml) && isPartOfArray(xml)) {
// 		// result[xml.tagName] = generateArray(xml);
// 		console.log('part of array', xml);
// 	} else if (isNodeList(xml)) {
// 		console.log('nodeList', xml);
// 	} else {
// 		console.log('other', xml);
// 	}
// }


function toJson(xml) {
	if (isText(xml)) {
		return xml.nodeValue;
	} else if (isNodeList(xml)) {
		const children = xml.childNodes;
		const result = {};
		if (children) {
			const obj = {};
			for (let i = 0; i < children.length; i++) {
				const child = children.item(i);
				obj[child.tagName] = toJson(child);
			}
			result[xml.tagName] = obj;
		}
		return result;
	}
}

export class Xml {
	read(data) {
		const parser = new DOMParser();
		const root = parser.parseFromString(data, 'text/xml').documentElement.getElementsByTagName('row')[0].childNodes[0].childNodes;
		console.log(root, toJson(root));
	}
}