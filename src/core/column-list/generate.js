import columnFactory from 'core/column/column.factory';
import {startCase} from 'core/services/utility';
import {compile} from 'core/services/path';
import {getType} from 'core/services/convert';

export function generate(rows, deep = true) {
	if (!rows || rows.length === 0) {
		return [];
	}

	return drilldown(rows[0], null, deep);
}

function drilldown(graph, path, deep) {
	const props = Object.getOwnPropertyNames(graph);
	return props.reduce((columns, prop) => {
		const value = graph[prop];
		const propPath = path ? `${path}.${prop}` : prop;
		const type = getType(value);
		switch (type) {
			case 'array': {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = startCase(prop);
				column.path = propPath;
				column.value = compile(propPath);
				columns.push(column);
				break;
			}
			case 'collection': {
				break;
			}
			case 'object': {
				if(deep) {
					columns.push(...drilldown(value, propPath, true));
				}
				break;
			}
			default: {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = startCase(prop);
				column.path = propPath;
				column.value = compile(propPath);
				columns.push(column);
				break;
			}
		}

		return columns;
	}, []);
}