import {extend} from 'core/services/utility';

class Plan {
	constructor(schema) {
		this.isRoot = !arguments.length;
		this.schema = schema;
		this.pointer = schema || {};
	}

	branch() {
		return new Plan(this.pointer);
	}

	cursor(name) {
		const schema = this.schema;
		this.pointer =
			schema.hasOwnProperty(name)
				? schema[name]
				: schema[name] = {};
	}

	compile(data) {
		if (this.isRoot) {
			return {
				schema: this.schema,
				data: data
			};
		}
		else {
			return data;
		}
	};
}

class Settings {
	constructor() {
	}

	factory(item) {return {};}
	selector(source) {return source;}
	name(_) {return null;}
	value(item) {return item;}
}

function factory(plan) {
	return name => {
		plan.cursor(name);
		return function (settings) {
			return pivot(settings, plan.branch());
		};
	};
}

export default function pivot(settings, plan) {
	const settings = extend(new Settings(), settings);
	const plan = plan || new Plan(null);
	const pivot = factory(plan);
	const aggregate = source => {
		return settings
			.selector(source)
			.reduce((memo, selection) => {
				const name = settings.name(selection);
				memo[name] = settings.value(selection, source, pivot(name));
				return memo;
			}, settings.factory(source));
	};

	return source =>
		plan.compile(
			plan.isRoot
				? source.map(aggregate)
				: aggregate(source));
}