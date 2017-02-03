import {isUndefined} from './utility';

export default class Path {
	static compile(path) {
		const parts = path ? path.split('.') : [];
		return (item, value) => {
			let accessor = item;
			const length = parts.length;
			const last = length - 1;
			for (let i = 0; i < last; i++) {
				accessor = accessor[parts[i]];
			}

			const property = parts[last];
			if (!isUndefined(value)) {
				accessor[property] = value;
			} else {
				return accessor[property];
			}
		};
	}
}