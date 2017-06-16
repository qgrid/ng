function isPartOfArray(child) {
	const parent = child.parentNode;
	const children = parent.getElementsByTagName(child.tagName);
	return children.length > 1;
}
function isElement(xml) {
	return xml.nodeType === 1;
}
function isTextContainer(xml) {
	return xml.nodeType === 1 && !xml.children.length && xml.childNodes.length;
}

function generateArray(child) {
	console.log(child.ownerDocument.documentElement.getElementsByTagName('city'));
	const parent = child.parentNode;
	const childrenCollection = parent.getElementsByTagName(child.tagName);
	const siblings = Array.from(childrenCollection);
	const result = [];

	for (let item of siblings) {
		if (isTextContainer(item)) {
			result.push(item.textContent);
		} else {
			const obj = {};
			parse(item, obj);
			result.push(obj);
		}
		child.setAttribute('visited', '');
	}
	return result;
}
function isVisited(xml) {
	return xml.getAttribute('visited');
}
function parse(xml, obj, tagName) {
	const childrenCollection = tagName ? xml.getElementsByTagName(tagName) : xml.children;
	const children = Array.from(childrenCollection);
	if (children && children.length > 0) {
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (isPartOfArray(child) && !isVisited(child)) {
				obj[child.nodeName] = generateArray(child);
			} else if (isTextContainer(child)) {
				obj[child.nodeName] = child.textContent;
			} else if (isElement(child)) {
				const childObj = {};
				parse(child, childObj);
				obj[child.nodeName] = childObj;
			}
		}
	}
	else if (isTextContainer(xml)) {
		obj[xml.nodeName] = xml.textContent;
	}
}


export class Xml {
	read(data, tagName) {
		const result = {};
		const parser = new DOMParser();
		const root = parser.parseFromString(data, 'text/xml').documentElement;
		console.time('parse xml');

		parse(root, result);

		console.timeEnd('parse xml');

		return result[tagName];
	}
}