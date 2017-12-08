export default function ($q, context) {

	const suggestFactory = function (name) {
		return function (node, line) {
			const selection = ('' + this.value).toLowerCase(),
				field = line.get(name).expressions[0].value;

			return context.suggest(field, 0, 10, selection)
		}
	};

	const suggestsFactory = function (name) {
		return function (node, line) {
			const selection =
					(this.values || [])
						.map(item => ('' + item).toLowerCase()),
				deferred = $q.defer(),
				field = line.get(name).expressions[0].value;

			context.suggest(field, 0, 10, this.filter, selection)
				.then(function (data) {
					if (selection.length) {
						deferred.resolve(
							data.filter(item => selection.indexOf(('' + item).toLowerCase()) < 0)
						);
					}
					else {
						deferred.resolve(data);
					}
				})
				.catch(() => {
					deferred.reject();
				});

			return deferred.promise;
		};
	};

	return function (name) {
		return {
			suggest: suggestFactory(name),
			suggests: suggestsFactory(name)
		};
	};
}
