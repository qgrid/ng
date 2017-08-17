export function sortIndexFactory(model) {
	return columns => {
		const columnListState = model.columnList();
		const oldIndex = columnListState.index;
		const templateIndex = columnListState.columns.map(c => c.key);
		const index = Array.from(columns);
		index.sort((x, y) => {
			let xi = x.index;
			let yi = y.index;
			if (xi === yi) {
				xi = oldIndex.indexOf(x.key);
				yi = oldIndex.indexOf(y.key);

				if (xi === yi) {
					xi = templateIndex.indexOf(x.key);
					yi = templateIndex.indexOf(y.key);
				}
			}

			return xi < yi ? -1 : 1;
		});

		const newIndex = index.map(c => c.key);
		return {
			index: newIndex,
			hasChanges: !equals(oldIndex, newIndex)
		};
	};
}

function equals(xs, ys) {
	const length = xs.length;
	if (length !== ys.length) {
		return false;
	}

	for (let i = 0; i < length; i++) {
		if (xs[i] !== ys[i]) {
			return false;
		}
	}
	return true;
}