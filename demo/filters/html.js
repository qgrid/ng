import Prism from 'prismjs';

export default function () {
	return text => {
		if (text) {
			text = text
				.replace('module.exports = "', '')
				.slice(0, -1);

			return Prism.highlight(text, Prism.languages.html);
		}
		return text;
	};
}
