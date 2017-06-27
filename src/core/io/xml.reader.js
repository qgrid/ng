const types = {
	ELEMENT_NODE: 1
};

export class XmlReader {
	constructor() {
		this.result = {};
	}

	read(text) {
		const parser = new DOMParser();
		const root = parser.parseFromString(text, 'text/xml').documentElement;

		return this.parse(root, this.result);
	}

	isPartOfArray(xml) {
		const parent = xml.parentNode;
		const children = parent.getElementsByTagName(xml.tagName);
		return children.length > 1;
	}

	isElement(xml) {
		return xml.nodeType === types.ELEMENT_NODE;
	}

	isTextContainer(xml) {
		return xml.nodeType === types.ELEMENT_NODE && !xml.children.length && xml.childNodes.length;
	}

	generateArray(xml) {
		const parent = xml.parentNode;
		const childrenCollection = parent.getElementsByTagName(xml.tagName);
		const siblings = Array.from(childrenCollection);
		const result = [];

		for (let item of siblings) {
			if (this.isTextContainer(item)) {
				result.push(item.textContent);
			} else {
				result.push(this.parse(item, {}));
			}
			xml.setAttribute('visited', '');
		}
		return result;
	}

	isVisited(xml) {
		return xml.getAttribute('visited');
	}

	parse(xml, obj) {
		const childrenCollection = xml.children;
		const children = Array.from(childrenCollection);
		if (children && children.length > 0) {
			for (let child of children) {
				if (this.isPartOfArray(child) && !this.isVisited(child)) {
					obj[child.nodeName] = this.generateArray(child);
				} else if (this.isTextContainer(child)) {
					obj[child.nodeName] = child.textContent;
				} else if (this.isElement(child)) {
					obj[child.nodeName] = this.parse(child, {});
				}
			}
		}
		else if (this.isTextContainer(xml)) {
			obj[xml.nodeName] = xml.textContent;
		}

		return obj;
	}


}