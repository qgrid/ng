import * as markup from './markup';

export const escape = CSS.escape;

export function sheet(id) {
	let sheet = document.getElementById(id);
	if (!sheet) {
		sheet = document.createElement('style');
		sheet.type = 'text/css';
		sheet.id = id;
		document.getElementsByTagName('head')[0].appendChild(sheet);
	}

	return {
		set: css => {
			sheet.innerHTML = markup.build(css);
		},
		remove: () => {
			sheet.parentNode.removeChild(sheet);
		}
	}
}