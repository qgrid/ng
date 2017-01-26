import Error from  './error';
import {isUndefined} from '../services/utility';

/**
 * If value is undefined exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
export function notUndefined(value, name){
	if (isUndefined(value)) {
		throw new Error('guard.notUndefined', name);
	}
}


/**
 * If value is null or undefined exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
export function notNull(value, name){
	if (value === null || isUndefined(value)) {
		throw new Error('guard.notNull', name);
	}
}

/**
 * If value is null or undefined or empty exception will be thrown
 * @param {any} value - Value to check
 * @param {string} name - Argument name
 */
export function notNullOrEmpty(value, name){
	if (value === null || isUndefined(value) || value === '') {
		throw new Error('guard.notNullOrEmpty', name);
	}
}