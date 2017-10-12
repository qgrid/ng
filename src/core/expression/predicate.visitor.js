import {AppError} from '../infrastructure';
import {castFactory as castAsFactory} from './cast.factory';
import {Visitor} from './expression.visitor';
import {isArray, identity} from '../utility';

export class PredicateVisitor extends Visitor {
	constructor(valueFactory) {
		super();

		this.valueFactory = valueFactory;
	}

	visitGroup(group) {
		if (group.right) {
			const lp = this.visit(group.left);
			const rp = this.visit(group.right);

			switch (group.op) {
				case 'and':
					return value => lp(value) && rp(value);
				case 'or':
					return value => lp(value) || rp(value);

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
		const r = condition.right;
		const name = condition.left;
		const getValue = this.valueFactory(name);
		const map = new Set();

		let castAs;
		if (isArray(r)) {
			if (r.length) {
				castAs = castAsFactory(r[0]);
				r.forEach(x => map.add(x));
			}
			else {
				castAs = identity;
			}
		}
		else {
			castAs = castAsFactory(r);
		}

		let predicate;
		switch (condition.op) {
			case 'isNotNull':
				predicate = v => v || v === 0;
				break;
			case 'isNull':
				predicate = v => !v && v !== 0;
				break;
			case 'equals':
				predicate = v => castAs(v) === r;
				break;
			case 'notEquals':
				predicate = v => castAs(v) !== r;
				break;
			case 'greaterThanOrEquals':
				predicate = v => castAs(v) >= r;
				break;
			case 'greaterThan':
				predicate = v => castAs(v) > r;
				break;
			case 'lessThanOrEquals':
				predicate = v => castAs(v) <= r;
				break;
			case 'lessThan':
				predicate = v => castAs(v) < r;
				break;
			case 'between':
				predicate = v => castAsFactory(r[0])(v) <= v && v <= castAsFactory(r[1])(v);
				break;
			case 'in':
				predicate = v => {
					const value = !v && v !== 0 ? 'null' : v;
					return map.has(value);
				};
				break;
			case 'like':
				predicate = v => {
					const r = castAs(v);
					return v && ('' + v).toLowerCase().includes(('' + r).toLowerCase());
				};
				break;
			case 'notLike':
				predicate = v => {
					const r = castAs(v);
					return v && !('' + v).toLowerCase().includes(('' + r).toLowerCase());
				};
				break;
			case 'startsWith':
				predicate = v => {
					const r = castAs(v);
					const substr = v.substr(0, r.length).toLowerCase();
					return ('' + r).toLowerCase() === substr;
				};
				break;
			case 'endsWith':
				predicate = v => {
					const r = castAs(v);
					const substr = v.slice(-r.length).toLowerCase();
					return ('' + r).toLowerCase() === substr;
				};
				break;
			default:
				throw new AppError(
					'predicate.visitor',
					`Invalid operation ${condition.op}`
				);
		}

		return l => {
			const v = getValue(l);
			if (isArray(v)) {
				let length = v.length;
				while (length--) {
					if (predicate(v[length])) {
						return true;
					}
				}

				return false;
			}

			return predicate(v);
		};
	}
}