export function flatView(rowDetails, result = []) {
	rowDetails.forEach((item) => {
		result.push(item.row);
		result.push(item);
	});

	return result;
}