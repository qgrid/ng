import Prism from 'prismjs';

export default function () {
	return text => {
		if (text) {
			// text =
			// 	text
			// 		.replace('module.exports = "', '');
			// .replace('\\r\\n', '<br />')
			// .replace('\\n', '<br />');

			return Prism.highlight(text, Prism.languages.javascript);
		}
		return text;
	};
}
