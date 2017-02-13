import Resource from 'core/resource/resource';
import EnumerableResource from 'core/resource/resource.enumerable';
import AppError from 'core/infrastructure/error';

export default function factory(resource, key) {
	const data = resource.data;
	if (resource instanceof EnumerableResource) {
		let keyIndex = 1;
		let count = resource.count;
		const originKey = key;
		while (data.hasOwnProperty(key)) {
			key = originKey + keyIndex++;
		}

		if (count < keyIndex) {
			count = keyIndex;
		}

		return (content, scope) => {
			// TODO: do we need full clone here?
			data[key] = content;
			return new EnumerableResource(data, scope, count);
		};
	}

	if (data.hasOwnProperty(key)) {
		throw new AppError('resource.factory', `Ambiguous key "${key}"`);
	}

	return (content, scope) => {
		// TODO: do we need full clone here?
		data[key] = content;
		return new Resource(data, scope);
	};
}