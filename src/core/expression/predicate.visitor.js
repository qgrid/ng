import AppError from 'core/infrastrucuture/error';
import castAsFactory from './cast.factory';
import Visitor from './visitor'

export default class PredicateVisitor extends Visitor {
	constructor() {
		super();
	}

	visitGroup(group) {
		if (group.right) {
			const lp = this.visit(group.left),
				rp = this.visit(group.right);

			switch (group.op) {
				case 'and':
					return function (value) {
						return lp(value) && rp(value);
					};
					break;
				case 'or':
					return function (value) {
						return lp(value) || rp(value);
					};
					break;
				default:
					throw  AppError(
						'predicate.visitor',
						`Invalid operation ${group.op}`
					);
			}
		}
		else {
			return this.visit(group.left);
		}
	}

	visitCondition(condition) {
		const r = condition.right,
			name = condition.left,
			castAs = castAsFactory(r);

		switch (condition.op) {
			case 'isNotNull':
				return l => {
					const v = l[name];
					return v || v === 0;
				};
			case 'isNull':
				return l => {
					const v = l[name];
					return !v && v !== 0;
				};
			case 'equals':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v === r;
				};
			case 'notEquals':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v !== r;
				};
			case 'greaterThanOrEquals':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v >= r;
				};
			case 'greaterThan':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v > r;
				};
			case 'lessThanOrEquals':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v <= r;
				};
			case 'lessThan':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v < r;
				};
			case 'between':
				return l => {
					const v = l[name];

					return castAsFactory(r[0])(v) <= v && v <= castAsFactory(r[1])(v);
				};
			case 'in':
				return l => {
					const v = !l[name] && l[name] !== 0 ? 'null' : l[name];

					const map = r.reduce(function (memo, item) {
						memo[castAsFactory(item)(v)] = true;
						return memo;
					}, {});

					return map.hasOwnProperty(v);
				};
			case 'like':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v && ('' + v).toLowerCase().contains(('' + r).toLowerCase());
				};
			case 'notLike':
				return l => {
					const v = l[name],
						r = castAs(v);
					return v && !('' + v).toLowerCase().contains(('' + r).toLowerCase());
				};
			case 'startsWith':
				return l => {
					const v = l[name],
						r = castAs(v),
						substr = v.substr(0, r.length);
					return r === substr;
				};
			case 'endsWith':
				return l => {
					const v = l[name],
						r = castAs(v),
						substr = v.slice(-r.length);
					return r === substr;
				};
			default:
				throw new AppError(
					'predicate.visitor',
					`Invalid operation ${condition.op}`
				);
		}
	}
}