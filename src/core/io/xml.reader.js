import {isArray} from '@grid/core/utility';

const NODE_TYPE = {
	ELEMENT: 1,
	TEXT: 3
};

export class XmlReader {
	constructor() {
	}

	read(text) {
		const parser = new DOMParser();
		const root = parser.parseFromString(text, 'text/xml').documentElement;

		const statistics = this.getStatistics(root);
		const graph = this.build(root, statistics, 'root');
		if (isArray(graph)) {
			return graph;
		}

		return [graph];
	}

	isTextContainer(xml) {
		return xml.nodeType === NODE_TYPE.ELEMENT && !xml.children.length && xml.childNodes.length;
	}

	objectFromAttributes() {
		// node, statistics, path
		// TODO: implement
		return {};
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


	build(node, statistics, path = 'root', graph = {}) {
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

		const result = this.objectFromAttributes(node);
		graph[node.nodeName] = result;
		return result;
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