import * as markup from './markup';

export const escape = CSS.escape;

export function addStyle(id, css) {
	const style = document.createElement('style');
	style.innerHTML = markup.build(css);
	style.type = 'text/css';
	style.id = id;
	document.getElementsByTagName('head')[0].appendChild(style);
}

export function removeStyle(id) {
	const sheet = document.getElementById(id);
	if(sheet) {
		sheet.parentNode.removeChild(sheet);
	}
}