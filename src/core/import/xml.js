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
	const parent = child.parentNode;
	const siblings = parent.getElementsByTagName(child.tagName);
	const result = [];

	for (let i = 0; i < siblings.length; i++) {
		const item = siblings.item(i);
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
function parse(xml, obj) {
	const children = xml.children;
	if (children && children.length > 0) {
		for (let i = 0; i < children.length; i++) {
			const child = children.item(i);
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
	else {
		obj[xml.nodeName] = xml.textContent;
	}
}


export class Xml {
	read(data) {
		const result = {};
		const parser = new DOMParser();
		const root = parser.parseFromString(data, 'text/xml').documentElement;
		parse(root, result);

		return result;
	}
}