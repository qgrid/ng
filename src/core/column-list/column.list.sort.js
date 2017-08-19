export function sortIndexFactory(model) {
	return columns => {
		const columnListState = model.columnList();

		const columnListIndex = columnListState.index;
		const columnTemplateIndex = columnListState.columns.map(c => c.key);
		const columnDataIndex = columns.map(c => c.key);

		const compare = compareFactory(columnListIndex, columnTemplateIndex, columnDataIndex);
		const columnIndex = Array.from(columns);
		columnIndex.sort(compare);

		const index = columnIndex.map(c => c.key);
		return {
			index: index,
			hasChanges: !equals(columnListIndex, index)
		};
	};
}

function compareFactory(listIndex, templateIndex, dataIndex) {
	const listFind = findFactory(listIndex);
	const templateFind = findFactory(templateIndex);
	const dataFind = findFactory(dataIndex);

	return (x, y) => {
		let xi = listFind(x.key);
		let yi = listFind(y.key);

		if (xi === yi) {
			xi = x.index;
			yi = y.index;

			if (xi === yi) {
				xi = templateFind(x.key);
				yi = templateFind(y.key);

				if (xi === yi) {
					xi = dataFind(x.key);
					yi = dataFind(y.key);
				}
			}
		}

		return xi < yi ? -1 : 1;
	};
}

function findFactory(index) {
	const map =
		index.reduce((memo, key, i) => {
			memo.set(key, i);
			return memo;
		}, new Map());

	return key => map.has(key) ? map.get(key) : -1;
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