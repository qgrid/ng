import * as markup from './markup';

export const escape = CSS.escape;

export function sheet(id) {
	let sheet = document.getElementById(id);
	const getSheet = () => {
		if (!sheet) {
			sheet = document.createElement('style');
			sheet.type = 'text/css';
			sheet.id = id;
			document.getElementsByTagName('head')[0].appendChild(sheet);
		}

		return sheet;
	};

	return {
		set: css => {
			const sheet = getSheet();
			sheet.innerHTML = markup.build(css);
		},
		remove: () => {
			if (sheet) {
				sheet.parentNode.removeChild(sheet);
			}
		}
	};
}