import Error from '../infrastructure/error';
import Node from './node';

export default function nodeBuilder(columnMap, groupBy, valueFactory) {
	if (groupBy.length === 0) {
		return () => [];
	}

	const groupKey = groupBy[0];
	if (!columnMap.hasOwnProperty(groupKey)) {
		throw new Error('node.builder', `can't find column "${groupKey}"`);
	}

	const column = columnMap[groupKey];
	const getValue = valueFactory(column);
	return rows => {
		const keys = [];
		const nodes = [];
		const groups = {};

		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			const key = getValue(row);
			if (!groups.hasOwnProperty(key)) {
				const node = new Node(key);
				node.rows.push(row);
				keys.push(key);
				nodes.push(node);
				groups[key] = node;
			}
			else {
				const node = groups[key];
				node.rows.push(row);
				keys.push(key);
			}
		}

		const nextGroupBy = groupBy.slice(1);
		if (nextGroupBy.length) {
			const build = nodeBuilder(columnMap, nextGroupBy, valueFactory);
			for (let i = 0, length = keys.length; i < length; i++) {
				const key = keys[i];
				const node = groups[key];
				node.children = build(node.rows);
			}
		}

		return nodes;
	};
}