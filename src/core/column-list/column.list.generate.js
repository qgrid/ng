import {startCase} from '../utility';
import {compile, getType} from '../services';

export function generate(context) {
	const deep = context.deep || true;
	if (!context.rows || context.rows.length === 0 || !context.columnFactory) {
		return [];
	}

	return build(context.rows[0], null, context.columnFactory, deep, context.title);
}

function build(graph, path, columnFactory, deep, title) {
	const props = Object.getOwnPropertyNames(graph);
	return props.reduce((columns, prop) => {
		const value = graph[prop];
		const propPath = path ? `${path}.${prop}` : prop;
		const type = getType(value);
		switch (type) {
			case 'array': {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = title ? title(columns.length, graph) : startCase(propPath);
				column.path = propPath;
				column.value = compile(propPath);
				column.source = 'generation';
				columns.push(column);
				break;
			}
			case 'collection': {
				break;
			}
			case 'object': {
				if (deep) {
					columns.push(...build(value, propPath, columnFactory, true, title));
				}
				break;
			}
			default: {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = title ? title(columns.length, graph) : startCase(propPath);
				column.path = propPath;
				column.value = compile(propPath);
				column.source = 'generation';
				columns.push(column);
				break;
			}
		}

		return columns;
	}, []);
}