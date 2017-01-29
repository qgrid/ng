import {Grid} from '../grid/grid';
import AppError from 'core/infrastructure/error';
import {isUndefined} from 'core/services/utility';

export default function create(scope, args) {
	const env = {};
	for(let arg of args) {
		if (!isUndefined(arg)) {
			if (isUndefined(scope[arg])) {
				throw new AppError(
					'template.scope',
					`"${arg}" is not defined"`
				);
			}

			const argScope = find(scope);
			if (argScope === null) {
				throw new AppError(
					'template.scope',
					`Let scope is not found for "${arg}"`
				);
			}
			env[arg] =argScope[arg];
		}
	}

	return env;
}

function find(scope) {
	// When trasclusion applies, transclusion scope is a sibling for the owner scope,
	// so we searching in siblings of parents
	let current = scope;
	while (current) {
		const letScope = test(current.$$prevSibling) || test(current.$$nextSibling); // eslint-disable-line angular/no-private-call
		if (letScope) {
			return letScope;
		}

		current = current.$parent;
	}

	return null;
}

function test(scope) {
	if (scope && scope.hasOwnProperty('$grid') && scope.$grid instanceof Grid) {
		return scope.$parent;
	}

	return null;
}