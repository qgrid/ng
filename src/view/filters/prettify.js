export default function (item) {
	const reg = /[-_\/\\\s]/g; // eslint-disable-line no-useless-escape
	let result = item;
	if (reg.test(item)) {
		result = item.split(reg).join(' ');
	}
	return result[0].toUpperCase() + result.slice(1).toLowerCase();
}
