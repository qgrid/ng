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

		this.parse(root);
		return this.result;
	}

	isPartOfArray(child) {
		const parent = child.parentNode;
		const children = parent.getElementsByTagName(child.tagName);
		return children.length > 1;
	}

	isElement(xml) {
		return xml.nodeType === types.ELEMENT_NODE;
	}

	isTextContainer(xml) {
		return xml.nodeType === types.ELEMENT_NODE && !xml.children.length && xml.childNodes.length;
	}

	generateArray(child) {
		const parent = child.parentNode;
		const childrenCollection = parent.getElementsByTagName(child.tagName);
		const siblings = Array.from(childrenCollection);
		const result = [];

		for (let item of siblings) {
			if (this.isTextContainer(item)) {
				result.push(item.textContent);
			} else {
				const obj = {};
				this.parse(item, obj);
				result.push(obj);
			}
			child.setAttribute('visited', '');
		}
		return result;
	}

	isVisited(xml) {
		return xml.getAttribute('visited');
	}

	parse(xml) {
		const childrenCollection = xml.children;
		const children = Array.from(childrenCollection);
		const obj = this.result;
		if (children && children.length > 0) {
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (this.isPartOfArray(child) && !this.isVisited(child)) {
					obj[child.nodeName] = this.generateArray(child);
				} else if (this.isTextContainer(child)) {
					obj[child.nodeName] = child.textContent;
				} else if (this.isElement(child)) {
					const childObj = {};
					this.parse(child, childObj);
					obj[child.nodeName] = childObj;
				}
			}
		}
		else if (this.isTextContainer(xml)) {
			obj[xml.nodeName] = xml.textContent;
		}
	}


}