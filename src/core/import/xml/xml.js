import {isArray} from '@grid/core/utility';

const NODE_TYPE = {
	ELEMENT: 1,
	ATTRIBUTE: 2,
	TEXT: 3,
	DOCUMENT: 9
};

export class Xml {
	read(text) {
		if (!text) {
			return [];
		}
		const parser = new DOMParser();
		const root = parser.parseFromString(text, 'text/xml').documentElement;

		this.elementsFromAttributes(root);
		const statistics = this.getStatistics(root);
		const graph = this.build(root, statistics, 'root');

		if (isArray(graph)) {
			return graph;
		}

		return [graph];
	}

	isTextContainer(node) {
		return node.nodeType === NODE_TYPE.ELEMENT && !node.children.length && node.childNodes.length;
	}

	hasAttributes(node) {
		return Array.from(node.attributes).length > 0;
	}

	elementsFromAttributes(node) {
		if (this.hasAttributes(node)) {
			const owner = node.ownerDocument;
			for (let attr of Array.from(node.attributes)) {
				const element = owner.createElement(attr.name);
				const text = owner.createTextNode(attr.value);
				element.appendChild(text);
				node.appendChild(element);
				node.removeAttributeNode(attr);
			}
		}
		const children = Array.from(node.children);
		if (children.length > 0) {
			for (let child of children) {
				this.elementsFromAttributes(child);
			}
		}
		return node;
	}

	objectFromChildren(node, statistics, path) {
		const graph = {};
		for (let child of Array.from(node.children)) {
			const childPath = `${path}/${child.nodeName}`;
			const testSt = statistics.get(childPath);
			const result = testSt.isArray
				? this.arrayFromParent(child.parentNode, statistics, path, child.nodeName)
				: this.build(child, statistics, childPath);

			graph[child.nodeName] = result;
		}

		return graph;
	}

	arrayFromChildren(node, statistics, path) {
		const result = [];
		for (let child of Array.from(node.children)) {
			const childPath = `${path}/${child.nodeName}`;
			result.push(this.build(child, statistics, childPath));
		}

		return result;
	}

	arrayFromParent(node, statistics, path, tag) {
		const result = [];
		const childPath = `${path}/${tag}`;
		for (let child of Array.from(node.getElementsByTagName(tag))) {
			result.push(this.build(child, statistics, childPath));
		}

		return result;
	}


	build(node, statistics, path = 'root') {
		if (node.children.length) {
			const testPath = `${path}/${node.children.item(0).nodeName}`;
			const testSt = statistics.get(testPath);
			const result = testSt.isArray
				? this.arrayFromChildren(node, statistics, path)
				: this.objectFromChildren(node, statistics, path);

			return result;
		}
		else if (this.isTextContainer(node)) {
			return node.textContent;
		}

		return node.nodeValue;
	}

	info(node, lastInfo) {
		if (lastInfo && lastInfo.isArray) {
			return lastInfo;
		}

		return {
			isArray: node.parentNode.getElementsByTagName(node.nodeName).length > 1
		};
	}

	getStatistics(node, path = 'root', statistics = new Map()) {

		statistics.set(path, this.info(node, statistics.get(path)));

		const children = Array.from(node.children);
		if (children.length > 0) {
			for (let child of children) {
				const childPath = `${path}/${child.nodeName}`;
				this.getStatistics(child, childPath, statistics);
			}
		}

		return statistics;
	}
}